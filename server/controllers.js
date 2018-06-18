module.exports = {
  getUser: (req, res) => {
    if (req.user) {
      res.status(200).send(req.user);
    } else {
      res.status(401).send("nice try bub");
    }
  },

  displayCampaigns: (req, res) => {
    const db = req.app.get("db");
    db.display_campaigns_home(req.user.user_id)
      .then(campaigns => {
        res.status(200).send(campaigns);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send();
      });
  },

  getParties: (req, res) => {
    const db = req.app.get("db");
    db.get_parties(req.user.user_id)
      .then(parties => {
        res.status(200).send(parties);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  display1Campaign: (req, res) => {
    const db = req.app.get("db");
    console.log("we pinged display campaign ", req.body);
    db.display_1_campaign(req.body.camp_id)
      .then(campaign => {
        res.status(200).send(campaign);
        console.log("we sent stuff ", campaign);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  createNewCampaign: (req, res) => {
    const db = req.app.get("db");
    db.create_new_campaign([
      req.body.user_id,
      req.body.camp_name,
      req.body.camp_desc1,
      req.body.camp_desc2,
      req.body.camp_picture
    ])
      .then(newCamp => {
        db.create_new_party([newCamp[0].camp_id]).then(newCamp => {
          res.status(200).send(newCamp);
        });
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  }
};
