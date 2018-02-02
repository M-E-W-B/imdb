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

    user.save((err, user) => {
      if (err) throw err;
      res.json(user);
    });
  });

  router.delete("/user/:id", (req, res) => {
    const userId = req.params.id;

    User.remove({ _id: userId }, err => {
      if (err) throw err;
      res.json({ message: `User ${userId} deleted.` });
    });
  });

  router.get("/user/:id", (req, res) => {
    const userId = req.params.id;

    User.findById(userId, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  });

  router.get("/user", (req, res) => {
    User.find({}, (err, users) => {
      if (err) throw err;
      res.json(users);
    });
  });
};
