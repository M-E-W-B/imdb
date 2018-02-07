module.exports = router => {
  require("./star-award")(router);
  require("./star-movie")(router);
  require("./movie")(router);
  require("./star")(router);
  require("./user")(router);
  require("./award")(router);
};
