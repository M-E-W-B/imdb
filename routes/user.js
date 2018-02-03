const User = require("../models/user");
const pick = require("lodash/pick");

module.exports = router => {
  router.delete("/user/:id", (req, res) => {
    const userId = req.params.id;

    User.remove({ _id: userId })
      .then(() => res.json({ message: `User ${userId} deleted.` }))
      .catch(next);
  });

  router.get("/user/:id", (req, res) => {
    const userId = req.params.id;

    User.findById(userId)
      .then(user => res.json(user))
      .catch(next);
  });

  router.get("/user", (req, res) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    User.find({})
      .skip(limit * page - limit)
      .limit(limit)
      .then(users => res.json(users))
      .catch(next);
  });
};
