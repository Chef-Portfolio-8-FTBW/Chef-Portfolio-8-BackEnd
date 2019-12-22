const router = require("express").Router();

const Chef = require("./dashboardModel");

const restricted = require("../auth/authenticate-middleware"); //for basic authorization

router.post("/profile", restricted, (req, res) => {
  let profile = req.body;

  Chef.add(profile)
    .then(prof => {
      res.status(201).json(prof);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
