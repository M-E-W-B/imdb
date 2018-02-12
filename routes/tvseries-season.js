const TvSeriesSeason = require("../models/tvseries-season");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/season/:seasonId/tvseries/:tvseriesId", (req, res, next) => {
    const { seasonId, tvseriesId } = req.params;
    const tvseriesSeason = new TvSeriesSeason({ seasonId, tvseriesId });

    tvseriesSeason
      .save()
      .then(tvseriesSeason => res.json(tvseriesSeason))
      .catch(next);
  });

  router.delete("/tvseries-season/:id", (req, res, next) => {
    const tvseriesSeasonId = req.params.id;

    TvSeriesSeason.remove({ _id: tvseriesSeasonId })
      .then(() =>
        res.json({ message: `TvSeriesSeason ${tvseriesSeasonId} deleted.` })
      )
      .catch(next);
  });

  router.get("/tvseries-season/:id", (req, res, next) => {
    const tvseriesSeasonId = req.params.id;

    TvSeriesSeason.findById(tvseriesSeasonId)
      .then(tvseriesSeason => res.json(tvseriesSeason))
      .catch(next);
  });

  router.get("/tvseries-season", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    TvSeriesSeason.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(tvseriesSeasons => res.json(tvseriesSeasons))
      .catch(next);
  });
};
