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

router.put('/edit/profile/:id', restricted, (req, res) =>{
  const { id } = req.params;
  const changes = req.body;

  Chef.findById(id)
    .then(chef =>{
      if(chef){
        Chef.editProfile(changes)
          .then(prof =>{
            res.status(200).json(prof);
      })
      }else{
        res.status.(404).json({msg: 'Profile not found'});
      }
    })
    .catch(err=>{
      res.status(500).json(err);
    });
});



module.exports = router;
