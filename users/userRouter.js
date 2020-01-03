const router = require("express").Router();

const Users = require("./usersModel");

router.get("/chef", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/chef/search/:chef_name", (req, res) => {
  Users.findBy(req.params)
    .then(chef => {
      console.log("filter", chef);
      res.status(200).json(chef);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ msg: `Chef ${filter} not found` });
    });
});

module.exports = router;
