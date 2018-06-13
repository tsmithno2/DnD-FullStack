module.exports = {
  getUser: (req, res) => {
    if (req.user) {
      console.log(req.user);
      res.status(200).send(req.user);
      console.log(req.user);
    } else {
      res.status(401).send("nice try bub");
    }
  },

  displayCampaigns: (req, res) => {
    if (req.user) {
      let campaigns = db.display_campaigns_home(req.body.id);
      console.log(campaigns);
      res.status(200).send(campaigns);
    } else {
      res.status(401).send("nice try bub");
    }
  }
};
