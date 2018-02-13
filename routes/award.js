const Award = require("../models/award");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/award", (req, res, next) => {
    const obj = pick(req.body, ["name", "year", "category"]);

    const award = new Award(obj);

    award
      .save()
      .then(award => res.json(award))
      .catch(next);
  });

  router.delete("/award/:id", (req, res, next) => {
    const awardId = req.params.id;

    Award.remove({ _id: awardId })
      .then(() => res.json({ message: `Award ${awardId} deleted.` }))
      .catch(next);
  });

  router.put("/award/:id", (req, res, next) => {
    const awardId = req.params.id;
    const obj = pick(req.body, ["name", "year", "category"]);

    Award.findByIdAndUpdate(awardId, obj)
      .then(award => res.json(award))
      .catch(next);
  });

  router.get("/award/:id", (req, res, next) => {
    const awardId = req.params.id;

    Award.findById(awardId)
      .then(award => res.json(award))
      .catch(next);
  });

  router.get("/award", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    Award.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(awards => res.json(awards))
      .catch(next);
  });
};
