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

    star.save().then(star => res.json(star));
  });

  router.delete("/star/:id", (req, res) => {
    const starId = req.params.id;

    Star.remove({ _id: starId }).then(() =>
      res.json({ message: `Star ${starId} deleted.` })
    );
  });

  router.get("/star/:id", (req, res) => {
    const starId = req.params.id;

    Star.findById(starId).then(star => res.json(star));
  });

  router.get("/star/:id/movie", (req, res) => {
    const starId = req.params.id;

    StarMovie.find({ starId })
      .populate("movieId")
      .then(starMovies => {
        res.json(starMovies.map(starMovie => starMovie.movieId));
      });
  });

  router.get("/star/:id/award", (req, res) => {
    const starId = req.params.id;

    StarAward.find({ starId })
      .populate("awardId")
      .then(starAwards => {
        res.json(starAwards.map(starAward => starAward.awardId));
      });
  });

  router.get("/star", (req, res) => {
    Star.find({}).then(stars => res.json(stars));
  });
};
