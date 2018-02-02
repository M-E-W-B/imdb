const Movie = require("../models/movie");
const StarMovie = require("../models/star-movie");

const pick = require("lodash/pick");

module.exports = router => {
  router.post("/movie", (req, res) => {
    const obj = pick(req.body, [
      "name",
      "genre",
      "plot",
      "releaseDate",
      "runtime",
      "rating"
    ]);

    const movie = new Movie(obj);

    movie.save().then(movie => res.json(movie));
  });

  router.delete("/movie/:id", (req, res) => {
    const movieId = req.params.id;

    Movie.remove({ _id: movieId }).then(() =>
      res.json({ message: `Movie ${movieId} deleted.` })
    );
  });

  router.get("/movie/:id", (req, res) => {
    const movieId = req.params.id;

    Movie.findById(movieId).then(movie => res.json(movie));
  });

  router.get("/movie/:id/full", (req, res) => {
    const movieId = req.params.id;

    Promise.all([Movie.findById(movieId)]).then(movie => res.json(movie));
  });

  router.get("/movie", (req, res) => {
    Movie.find({}).then(movies => res.json(movies));
  });
};
