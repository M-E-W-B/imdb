const StarEpisode = require("../models/star-episode");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/episode/:episodeId/star/:starId", (req, res, next) => {
    const { episodeId, starId } = req.params;
    const starEpisode = new StarEpisode({ episodeId, starId });

    starEpisode
      .save()
      .then(starEpisode => res.json(starEpisode))
      .catch(next);
  });

  router.delete("/star-episode/:id", (req, res, next) => {
    const starEpisodeId = req.params.id;

    StarEpisode.remove({ _id: starEpisodeId })
      .then(() =>
        res.json({ message: `StarEpisode ${starEpisodeId} deleted.` })
      )
      .catch(next);
  });

  router.get("/star-episode/:id", (req, res, next) => {
    const starEpisodeId = req.params.id;

    StarEpisode.findById(starEpisodeId)
      .then(starEpisode => res.json(starEpisode))
      .catch(next);
  });

  router.get("/star-episode", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    StarEpisode.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(starEpisodes => res.json(starEpisodes))
      .catch(next);
  });
};
