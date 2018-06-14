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

  createNewCampaign: (req, res) => {
    const db = req.app.get("db");
    db.create_new_campaign([
      req.user.user_id,
      req.body.camp_name,
      req.body.camp_desc1,
      req.body.camp_desc2,
      req.body.camp_picture
    ]).then(newCamp => {
      console.log("newCamp Full ", newCamp, " maybe???? ", newCamp[0].camp_id);
      db.create_new_party([newCamp[0].camp_id, req.user.user_id]);
    });
  }
};
