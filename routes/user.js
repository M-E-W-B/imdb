const User = require("../models/user");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/user", (req, res) => {
    const obj = pick(req.body, [
      "firstName",
      "lastName",
      "password",
      "phoneNumber",
      "email"
    ]);

    const user = new User(obj);

    user.save().then(user => res.json(user));
  });

  router.delete("/user/:id", (req, res) => {
    const userId = req.params.id;

    User.remove({ _id: userId }).then(() =>
      res.json({ message: `User ${userId} deleted.` })
    );
  });

  router.get("/user/:id", (req, res) => {
    const userId = req.params.id;

    User.findById(userId).then(user => res.json(user));
  });

  router.get("/user", (req, res) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    User.find({})
      .skip(limit * page - limit)
      .limit(limit)
      .then(users => res.json(users));
  });
};
