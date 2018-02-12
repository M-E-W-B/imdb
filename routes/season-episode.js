const SeasonEpisode = require("../models/season-episode");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/episode/:episodeId/season/:seasonId", (req, res, next) => {
    const { episodeId, seasonId } = req.params;
    const seasonEpisode = new SeasonEpisode({ episodeId, seasonId });

    seasonEpisode
      .save()
      .then(seasonEpisode => res.json(seasonEpisode))
      .catch(next);
  });

  router.delete("/season-episode/:id", (req, res, next) => {
    const seasonEpisodeId = req.params.id;

    SeasonEpisode.remove({ _id: seasonEpisodeId })
      .then(() =>
        res.json({ message: `SeasonEpisode ${seasonEpisodeId} deleted.` })
      )
      .catch(next);
  });

  router.get("/season-episode/:id", (req, res, next) => {
    const seasonEpisodeId = req.params.id;

    SeasonEpisode.findById(seasonEpisodeId)
      .then(seasonEpisode => res.json(seasonEpisode))
      .catch(next);
  });

  router.get("/season-episode", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    SeasonEpisode.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(seasonEpisodes => res.json(seasonEpisodes))
      .catch(next);
  });
};
