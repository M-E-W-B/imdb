const TvSeries = require("../models/tvseries");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/tvseries", (req, res, next) => {
    const obj = pick(req.body, [
      "name",
      "imageUrl",
      "yearFrom",
      "yearTo",
      "plot",
      "genre",
      "rating"
    ]);

    const tvseries = new TvSeries(obj);

    tvseries
      .save()
      .then(tvseries => res.json(tvseries))
      .catch(next);
  });

  router.delete("/tvseries/:id", (req, res, next) => {
    const tvseriesId = req.params.id;

    TvSeries.remove({ _id: tvseriesId })
      .then(() => res.json({ message: `TvSeries ${tvseriesId} deleted.` }))
      .catch(next);
  });

  router.put("/tvseries/:id", (req, res, next) => {
    const tvseriesId = req.params.id;
    const obj = pick(req.body, [
      "name",
      "imageUrl",
      "yearFrom",
      "yearTo",
      "plot",
      "genre",
      "rating"
    ]);

    TvSeries.findByIdAndUpdate(tvseriesId, obj)
      .then(tvseries => res.json(tvseries))
      .catch(next);
  });

  router.get("/tvseries/:id", (req, res, next) => {
    const tvseriesId = req.params.id;

    TvSeries.findById(tvseriesId)
      .then(tvseries => res.json(tvseries))
      .catch(next);
  });

  router.get("/tvseries", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    let scoreObj = {};
    let sortOptions = {};
    let searchOptions = {};

    if (req.query.search) {
      sortOptions = scoreObj = { score: { $meta: "textScore" } };
      searchOptions = {
        $text: {
          $search: req.query.search
        }
      };
    } else if (req.query.sort) {
      sortOptions = { [req.query.sort]: 1 };
    }

    TvSeries.find(searchOptions, scoreObj)
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(movies => res.json(movies))
      .catch(next);
  });
};
