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
    db.display_1_campaign(req.body.camp_id)
      .then(campaign => {
        res.status(200).send(campaign);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  displayParty: (req, res) => {
    const db = req.app.get("db");
    db.display_party_of_campaign_x(req.body.camp_id)
      .then(party => {
        res.status(200).send(party);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
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
  },

  get1PartyId: (req, res) => {
    const db = req.app.get("db");
    db.get_1_party_id_for_new_character(req.body.camp_id)
      .then(party => {
        res.status(200).send(party);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  createNewCharacter: (req, res) => {
    const db = req.app.get("db");
    db.create_new_character([
      req.body.party_id,
      req.body.camp_id,
      req.body.char_npc,
      req.body.char_pc,
      req.body.char_name,
      req.body.char_picture,
      req.body.char_alignment,
      req.body.char_deity,
      req.body.char_strength,
      req.body.char_dexterity,
      req.body.char_constitution,
      req.body.char_intelligence,
      req.body.char_wisdom,
      req.body.char_charisma,
      req.body.char_inventory,
      req.body.char_dm_notes
    ])
      .then(character => {
        res.status(200).send(character);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  getNpcs: (req, res) => {
    const db = req.app.get("db");
    db.get_all_npcs_for_campaign_x([req.body.camp_id, req.user.user_id])
      .then(npcs => {
        res.status(200).send(npcs);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  deleteCapaign: (req, res) => {
    const db = req.app.get("db");
    db.delete_campaign_x(req.query.camp_id, req.user.user_id)
      .then(campaignList => {
        console.log(campaignList);
        res.status(200).send(campaignList);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  deleteCharacter: (req, res) => {
    const db = req.app.get("db");
    db.delete_character(req.query.char_id)
      .then(characterList => {
        res.status(200).send(characterList);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  getUnobQuests: (req, res) => {
    const db = req.app.get("db");
    db.get_unob_quests(req.body.camp_id)
      .then(questList => {
        res.status(200).send(questList);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  getObQuests: (req, res) => {
    const db = req.app.get("db");
    db.get_ob_quests(req.body.camp_id)
      .then(questList => {
        res.status(200).send(questList);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  },

  getComQuests: (req, res) => {
    const db = req.app.get("db");
    db.get_com_quests(req.body.camp_id)
      .then(questList => {
        res.status(200).send(questList);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("error");
      });
  }
};
