const User = require("../models/user");
const pick = require("lodash/pick");

module.exports = router => {
  router.delete("/user/:id", (req, res, next) => {
    const userId = req.params.id;

    User.remove({ _id: userId })
      .then(() => res.json({ message: `User ${userId} deleted.` }))
      .catch(next);
  });

  router.get("/user/:id", (req, res, next) => {
    const userId = req.params.id;

    User.findById(userId)
      .then(user => res.json(user))
      .catch(next);
  });

  // @TODO: write a separate api for
  // 1. reset password
  // 2. forgot password
  // 3. change password
  router.put("/user/:id", (req, res, next) => {
    const userId = req.params.id;
    const obj = pick(req.body, ["firstName", "lastName", "phoneNumber"]);

    User.findByIdAndUpdate(userId, obj)
      .then(user => res.json(user))
      .catch(next);
  });

  router.get("/user", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    User.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(users => res.json(users))
      .catch(next);
  });
};
