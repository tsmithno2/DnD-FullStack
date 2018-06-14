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
    db.display_campaigns_home(req.params.id)
      .then(campaigns => {
        res.status(200).send(campaigns);
        console.log(campaigns);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send();
      });
  }
};
