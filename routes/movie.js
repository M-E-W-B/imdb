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

    const starMovies = StarMovie.find({ movieId }).populate("starId");
    const movie = Movie.findById(movieId);

    Promise.all([starMovies, movie]).then(([starMovies, movie]) => {
      const stars = starMovies.map(starMovie => starMovie.starId);
      let [directors, writers, cast, soundtrack, cinematographer] = Array(
        5
      ).fill([]);

      stars.forEach(star => {
        if (star.profession.indexOf("Director") !== -1)
          directors = directors.concat(star);

        if (star.profession.indexOf("Writer") !== -1)
          writers = writers.concat(star);

        if (star.profession.indexOf("Actor") !== -1) cast = cast.concat(star);

        if (star.profession.indexOf("Soundtrack") !== -1)
          soundtrack = soundtrack.concat(star);

        if (star.profession.indexOf("Cinematographer") !== -1)
          cinematographer = cinematographer.concat(star);
      });

      res.json({
        ...movie._doc,
        directors,
        writers,
        cast,
        soundtrack,
        cinematographer
      });
    });
  });

  router.get("/movie", (req, res) => {
    Movie.find({}).then(movies => res.json(movies));
  });
};
