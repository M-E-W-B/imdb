const Episode = require("../models/episode");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/episode", (req, res, next) => {
    const obj = pick(req.body, [
      "name",
      "sequence",
      "plot",
      "runtime",
      "rating"
    ]);

    const episode = new Episode(obj);

    episode
      .save()
      .then(episode => res.json(episode))
      .catch(next);
  });

  router.delete("/episode/:id", (req, res, next) => {
    const episodeId = req.params.id;

    Episode.remove({ _id: episodeId })
      .then(() => res.json({ message: `Episode ${episodeId} deleted.` }))
      .catch(next);
  });

  router.put("/award/:id", (req, res, next) => {
    const episodeId = req.params.id;
    const obj = pick(req.body, [
      "name",
      "sequence",
      "plot",
      "runtime",
      "rating"
    ]);

    Episode.findByIdAndUpdate(episodeId, obj)
      .then(episode => res.json(episode))
      .catch(next);
  });

  router.get("/episode/:id", (req, res, next) => {
    const episodeId = req.params.id;

    Episode.findById(episodeId)
      .then(episode => res.json(episode))
      .catch(next);
  });

  router.get("/episode", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    Episode.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(episode => res.json(episode))
      .catch(next);
  });
};
