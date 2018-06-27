require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const controllers = require("./controllers"); //may or may not be needed. i could put all functionality right here in this doc, but longer function i can put in the controller docs. i could even make multiple docs for each type of call. a .get a .delete and so on as a thought for further organization

const {
  CONNECTION_STRING,
  SERVER_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL
} = process.env;

app.use(bodyParser.json()); //using body parser for req.body
app.use(cors()); //allows servers to talk.. kind of. always put it in
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(
  // sends cookie to the user
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "openid profile"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      let { user_id, displayName, picture } = profile;
      const db = app.get("db");
      db.find_user([user_id]).then(user => {
        if (user[0]) {
          done(null, user[0].user_id);
        } else {
          db.create_new_user([displayName, picture, user_id]).then(
            createdUser => {
              done(null, createdUser[0].user_id);
            }
          );
        }
      });
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((id, done) => {
  app
    .get("db")
    .find_session_user([id])
    .then(user => {
      done(null, user[0]);
    });
});

app.get("/auth", passport.authenticate("auth0"));

app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/home"
  })
);

app.get("/auth/user", controllers.getUser); // used in header component to display user info

app.get("/api/displaycampaigns", controllers.displayCampaigns); //used in home component to display all campaigns

app.get("/api/getparties", controllers.getParties); //used to get and store all parties tied to the logged in user

app.post("/api/createcampaign", controllers.createNewCampaign); //used to create a new campaign. a new party will have to be made as well.

app.post("/api/getcampaign", controllers.display1Campaign); // used to get all the camaign info from db and display it on the playing page

app.post("/api/getpartymembers", controllers.displayParty); // used to get all the party members and all thier info from the db and display it on the playing page

app.post("/api/getpartyfornewcharacter", controllers.get1PartyId); //used on the create new character page in a component did mount to get a single party id that matches the camp id passed in so we know which party the character belongs to and if an npc, the party id will be null.

app.post("/api/createcharacter", controllers.createNewCharacter); //will take requestAnimationFrame.body and make a new character already tied to a campaign/party

app.post("/api/getnpcs", controllers.getNpcs); //will get all npc's related to a campaign to be display live on the playing page

app.post("/api/getunobquests", controllers.getUnobQuests); // used in the playing component to get all unobtained quests

app.post("/api/getobquests", controllers.getObQuests); // used in the playing comp to get all obtained but not completed quests

app.post("/api/getcompquests", controllers.getComQuests); // used in playing to get all the completed quests

app.post("/api/createquest", controllers.createNewQuest); // used to create a new quest in the newQuestComponent

app.delete("/api/deletecampaign", controllers.deleteCapaign); // will delete all quests, parties, characters and campaign info associated with camp_id that was passed in by the home companent

app.delete("/api/deletecharacter", controllers.deleteCharacter); // used in the playing component to delete an individual character for a campaign

app.delete("/api/deletequest", controllers.deleteQuest); // used in the playing comp to delete a single specific quest

app.put("/api/updatecampaign", controllers.updateCamapign); //used in the home component to edit the info for a specific campaign

app.put("/api/updatenpcs", controllers.updateAllCharacters); // used in playing component to edit npcs

app.put("/api/updatepartynpcs", controllers.updateAllCharacters); // used in playing component to edit party members who are npcs

app.put("/api/updatepcs", controllers.updateAllCharacters); // used in playing component to edit player characters in the party

app.put("/api/updateunobquests", controllers.updateAllQuests); // used in playing component to move quests from one catagory to another

app.put("/api/updateobquests", controllers.updateAllQuests); // used in playing component to move quests from one catagory to another

app.put("/api/updatecompquests", controllers.updateAllQuests); // used in playing component to move quests from one catagory to another

app.listen(SERVER_PORT, () =>
  console.log("Server is Listening " + SERVER_PORT)
);
