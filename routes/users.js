var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const controller = require("../controller/controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/submit", function (req, res, next) {
  res.render("submit", { title: "Submit Assignment" });
});

router.post(
  "/submit",
  [
    check("firstName", "firstName is required")
      .isLength({ min: 2, max: 20 })
      .escape(),
    check("lastName", "lastName is required")
      .isLength({ min: 2, max: 20 })
      .escape(),
    check("repo", "repo is required").isLength({ min: 2, max: 20 }).escape(),
    check("deployed", "deployed is required")
      .isLength({ min: 2, max: 20 })
      .escape(),
  ],
  upload.single("uploaded_file"),
  controller.submit_post
);
module.exports = router;
