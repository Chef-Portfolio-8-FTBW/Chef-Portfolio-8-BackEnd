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

router.put("/edit/profile/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Chef.findById(id)
    .then(chef => {
      if (chef) {
        Chef.editProfile(changes, id).then(prof => {
          res.json({ msg: "Success!", prof });
        });
      } else {
        res.status(404).json({ msg: "Profile not found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/recipe', restricted, (req, res)=>{
  let recipe = req.body;

  Chef.newRecipe(recipe)
    .then(recipes => {
      res.status(201).json(recipes)
    })
    .catch(err => {
      res.status(500).json(err)
    });
});

router.put('/edit/recipe/:id', restricted, (req, res) =>{
  const { id } = req.params;
  const changes = req.body;

  Chef.findRecipeId()
    .then(recipe =>{
      if (recipe){
        Chef.editRecipe(changes, id)
          .then(chef=>{
            res.status(200).json(chef);
          });
      } else{
        res.status(404).json({msg: 'Recipe not found'});
      }
    })
    .catch(err=>{
      res.status(500).json(err);
    });
});

router.delete('/delete/recipe/:id', restricted, (req, res)=>{
  Chef.remove(req.params)
    .then(recipe=>{
      res.status(200).json({msg: 'Recipe removed'});
    })
    .catch(err=>{
      res.status(404).json({msg: 'Recipe not found'});
    });
});

module.exports = router;
