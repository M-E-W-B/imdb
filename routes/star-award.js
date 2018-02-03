const StarAward = require("../models/star-award");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/award/:awardId/star/:starId", (req, res) => {
    const { awardId, starId } = req.params;
    const starAward = new StarAward({ awardId, starId });

    starAward
      .save()
      .then(starAward => res.json(starAward))
      .catch(next);
  });

  router.delete("/star-award/:id", (req, res) => {
    const starAwardId = req.params.id;

    StarAward.remove({ _id: starAwardId })
      .then(() => res.json({ message: `StarAward ${starAwardId} deleted.` }))
      .catch(next);
  });

  router.get("/star-award/:id", (req, res) => {
    const starAwardId = req.params.id;

    StarAward.findById(starAwardId)
      .then(starAward => res.json(starAward))
      .catch(next);
  });

  router.get("/star-award", (req, res) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    StarAward.find({})
      .skip(limit * page - limit)
      .limit(limit)
      .then(starAwards => res.json(starAwards))
      .catch(next);
  });
};
