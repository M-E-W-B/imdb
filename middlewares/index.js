module.exports = router => {
  require("./auth")(router);
  require("./verify")(router);
};
