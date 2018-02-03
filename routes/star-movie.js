const StarMovie = require("../models/star-movie");
const pick = require("lodash/pick");

module.exports = router => {
  router.post("/movie/:movieId/star/:starId", (req, res) => {
    const { movieId, starId } = req.params;
    const starMovie = new StarMovie({ movieId, starId });

    starMovie.save(starMovie => res.json(starMovie));
  });

  router.delete("/star-movie/:id", (req, res) => {
    const starMovieId = req.params.id;

    StarMovie.remove({ _id: starMovieId }).then(() =>
      res.json({ message: `StarMovie ${starMovieId} deleted.` })
    );
  });

  router.get("/star-movie/:id", (req, res) => {
    const starMovieId = req.params.id;

    StarMovie.findById(starMovieId).then(starMovie => res.json(starMovie));
  });

  router.get("/star-movie", (req, res) => {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    StarMovie.find({})
      .skip(limit * page - limit)
      .limit(limit)
      .then(starMovies => res.json(starMovies));
  });
};
