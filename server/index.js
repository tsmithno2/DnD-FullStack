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
      console.log(profile);
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

app.get("/auth/user/", controllers.getUser); // used in header component to display user info

app.get("/api/displaycampaigns/", controllers.displayCampaigns); //used in home component to display all campaigns

app.post("/api/createcampaign/", controllers.createNewCampaign); //used to create a new campaign. a new party will have to be made as well. i should be able to to that server side behind the scenes. all it needs are foreign keys so i should be able to take those off of the respoce hopefully.

app.listen(SERVER_PORT, () =>
  console.log("Server is Listening " + SERVER_PORT)
);
