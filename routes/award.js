const Award = require("../models/award");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/award", (req, res) => {
    const obj = pick(req.body, ["name", "year", "category"]);

    const award = new Award(obj);

    award.save().then(award => res.json(award));
  });

  router.delete("/award/:id", (req, res) => {
    const awardId = req.params.id;

    Award.remove({ _id: awardId }).then(() =>
      res.json({ message: `Award ${awardId} deleted.` })
    );
  });

  router.get("/award/:id", (req, res) => {
    const awardId = req.params.id;

    Award.findById(awardId).then(award => res.json(award));
  });

  router.get("/award", (req, res) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    Award.find({})
      .skip(limit * page - limit)
      .limit(limit)
      .then(awards => res.json(awards));
  });
};
