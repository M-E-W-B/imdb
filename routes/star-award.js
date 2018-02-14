const StarAward = require("../models/star-award");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/award/:awardId/star/:starId", (req, res, next) => {
    const { awardId, starId } = req.params;
    const starAward = new StarAward({ awardId, starId });

    starAward
      .save()
      .then(starAward => res.json(starAward))
      .catch(next);
  });

  router.delete("/star-award/:id", (req, res, next) => {
    const starAwardId = req.params.id;

    StarAward.remove({ _id: starAwardId })
      .then(result => res.json(result))
      .catch(next);
  });

  router.get("/star-award/:id", (req, res, next) => {
    const starAwardId = req.params.id;

    StarAward.findById(starAwardId)
      .then(starAward => res.json(starAward))
      .catch(next);
  });

  router.get("/star-award", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    StarAward.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(starAwards => res.json(starAwards))
      .catch(next);
  });
};
