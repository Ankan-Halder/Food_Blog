const express = require("express");
const router = express.Router();

const {getcreate} = require("../controllers/products");
const {getread} = require("../controllers/products");
const {getsearch} = require("../controllers/products");
const {getdelete} = require("../controllers/products");
const {getupdate} = require("../controllers/products");

//channelinsing the routes
router.route("/").post(getcreate);
router.route("/").get(getread);
router.route("/:id").get(getsearch);
router.route("/:id").delete(getdelete);
router.route("/:id").patch(getupdate);

//exporting the routes
module.exports = router;