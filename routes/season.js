const Season = require("../models/season");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/season", (req, res, next) => {
    const obj = pick(req.body, ["sequence", "year", "plot", "rating"]);

    const season = new Season(obj);

    season
      .save()
      .then(season => res.json(season))
      .catch(next);
  });

  router.delete("/season/:id", (req, res, next) => {
    const seasonId = req.params.id;

    Season.remove({ _id: seasonId })
      .then(() => res.json({ message: `Season ${seasonId} deleted.` }))
      .catch(next);
  });

  router.put("/season/:id", (req, res, next) => {
    const seasonId = req.params.id;
    const obj = pick(req.body, ["sequence", "year", "plot", "rating"]);

    Season.findByIdAndUpdate(seasonId, obj)
      .then(season => res.json(season))
      .catch(next);
  });

  router.get("/season/:id", (req, res, next) => {
    const seasonId = req.params.id;

    Season.findById(seasonId)
      .then(season => res.json(season))
      .catch(next);
  });

  router.get("/season", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    Season.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(season => res.json(season))
      .catch(next);
  });
};
