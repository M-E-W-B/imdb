const StarMovie = require("../models/star-movie");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/movie/:movieId/star/:starId", (req, res, next) => {
    const { movieId, starId } = req.params;
    const starMovie = new StarMovie({ movieId, starId });

    starMovie
      .save()
      .then(starMovie => res.json(starMovie))
      .catch(next);
  });

  router.delete("/star-movie/:id", (req, res, next) => {
    const starMovieId = req.params.id;

    StarMovie.remove({ _id: starMovieId })
      .then(result => res.json(result))
      .catch(next);
  });

  router.get("/star-movie/:id", (req, res, next) => {
    const starMovieId = req.params.id;

    StarMovie.findById(starMovieId)
      .then(starMovie => res.json(starMovie))
      .catch(next);
  });

  router.get("/star-movie", (req, res, next) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;
    const sortOptions = req.query.sort ? { [req.query.sort]: 1 } : {};

    StarMovie.find({})
      .sort(sortOptions)
      .skip(limit * page - limit)
      .limit(limit)
      .then(starMovies => res.json(starMovies))
      .catch(next);
  });
};
