const Star = require("../models/star");
const StarMovie = require("../models/star-movie");
const StarAward = require("../models/star-award");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/star", (req, res) => {
    const obj = pick(req.body, [
      "name",
      "bio",
      "imageUrl",
      "born",
      "profession",
      "gender"
    ]);

    const star = new Star(obj);

    star
      .save()
      .then(star => res.json(star))
      .catch(next);
  });

  router.delete("/star/:id", (req, res) => {
    const starId = req.params.id;

    Star.remove({ _id: starId })
      .then(() => res.json({ message: `Star ${starId} deleted.` }))
      .catch(next);
  });

  router.get("/star/:id", (req, res) => {
    const starId = req.params.id;

    Star.findById(starId)
      .then(star => res.json(star))
      .catch(next);
  });

  router.get("/star/:id/movie", (req, res) => {
    const starId = req.params.id;

    StarMovie.find({ starId })
      .populate("movieId")
      .then(starMovies => {
        res.json(starMovies.map(starMovie => starMovie.movieId));
      })
      .catch(next);
  });

  router.get("/star/:id/award", (req, res) => {
    const starId = req.params.id;

    StarAward.find({ starId })
      .populate("awardId")
      .then(starAwards => {
        res.json(starAwards.map(starAward => starAward.awardId));
      })
      .catch(next);
  });

  router.get("/star", (req, res) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    Star.find({})
      .skip(limit * page - limit)
      .limit(limit)
      .then(stars => res.json(stars))
      .catch(next);
  });
};
