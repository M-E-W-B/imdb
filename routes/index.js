module.exports = router => {
  require("./star-award")(router);
  require("./star-movie")(router);
  require("./star-episode")(router);
  require("./tvseries-season")(router);
  require("./season-episode")(router);
  require("./movie")(router);
  require("./star")(router);
  require("./user")(router);
  require("./award")(router);
  require("./tvseries")(router);
  require("./episode")(router);
  require("./season")(router);
};
