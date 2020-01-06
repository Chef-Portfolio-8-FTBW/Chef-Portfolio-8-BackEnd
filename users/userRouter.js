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

router.get("/byChef/:author", (req, res) => {
  Users.byChef(req.params)
    .then(chef => {
      console.log("filter", chef);
      res.status(200).json(chef);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ msg: `Author ${filter} not found` });
    });
});


router.get("/recipes/:title", (req, res) => {
  Users.byRecipe(req.params)
    .then(chef => {
      console.log("filter", chef);
      res.status(200).json(chef);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ msg: `Recipe ${filter} not found` });
    });
});

router.get("/meals/:meal_type", (req, res) => {
  Users.byMealType(req.params)
    .then(chef => {
      console.log("filter", chef);
      res.status(200).json(chef);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ msg: `Meal_Type ${filter} not found` });
    });
});

router.get("/:ingredients", (req, res) => {
  Users.byIngredients(req.params)
    .then(chef => {
      console.log("filter", chef);
      res.status(200).json(chef);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ msg: `Ingredients ${filter} not found` });
    });
});

router.get("/list", (req, res) => {
  Users.listRecipes()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'There was an error' });
    });
});

module.exports = router;
