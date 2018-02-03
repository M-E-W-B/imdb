const StarAward = require("../models/star-award");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/award/:awardId/star/:starId", (req, res) => {
    const { awardId, starId } = req.params;
    const starAward = new StarAward({ awardId, starId });

    starAward.save(starAward => res.json(starAward));
  });

  router.delete("/star-award/:id", (req, res) => {
    const starAwardId = req.params.id;

    StarAward.remove({ _id: starAwardId }).then(() =>
      res.json({ message: `StarAward ${starAwardId} deleted.` })
    );
  });

  router.get("/star-award/:id", (req, res) => {
    const starAwardId = req.params.id;

    StarAward.findById(starAwardId).then(starAward => res.json(starAward));
  });

  router.get("/star-award", (req, res) => {
    StarAward.find({}).then(starAwards => res.json(starAwards));
  });
};