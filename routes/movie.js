const Movie = require("../models/movie");
const StarMovie = require("../models/star-movie");
const pick = require("lodash/pick");

// @TODO: implement search for movies

module.exports = router => {
  router.post("/movie", (req, res, next) => {
    const obj = pick(req.body, [
      "name",
      "genre",
      "plot",
      "imageUrl",
      "releaseDate",
      "runtime",
      "rating"
    ]);

    const movie = new Movie(obj);

    movie
      .save()
      .then(movie => res.json(movie))
      .catch(next);
  });

  router.delete("/movie/:id", (req, res, next) => {
    const movieId = req.params.id;

    Movie.remove({ _id: movieId })
      .then(() => res.json({ message: `Movie ${movieId} deleted.` }))
      .catch(next);
  });

  router.get("/movie/:id", (req, res, next) => {
    const movieId = req.params.id;

    Movie.findById(movieId)
      .then(movie => res.json(movie))
      .catch(next);
  });

  router.get("/movie/:id/full", (req, res, next) => {
    const movieId = req.params.id;

    const starMovies = StarMovie.find({ movieId }).populate("starId");
    const movie = Movie.findById(movieId).lean();

    Promise.all([starMovies, movie])
      .then(([starMovies, movie]) => {
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
          ...movie,
          directors,
          writers,
          cast,
          soundtrack,
          cinematographer
        });
      })
      .catch(next);
  });

  router.get("/movie", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    Movie.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(movies => res.json(movies))
      .catch(next);
  });
};
