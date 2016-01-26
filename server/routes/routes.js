// Requirements
var controllers = require("../controllers")
var router = require('express').Router();

for(var route in controllers){
  router.route("/" + route)
  .get(controllers[route].get)
  .post(controllers[route].post)
  .put(controllers[route].put)
}

module.exports = router;