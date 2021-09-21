const { validationResult } = require("express-validator");
const Assignment = require("../models/assignments");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

exports.submit_post = async function (req, res, next) {
  const { firstName, lastName, repo, deployed } = req.body;
  const errors = validationResult(req);

  console.log(req.body);

  if (!errors.isEmpty()) {
    res.render("submitted", {
      title: "Submission failed",
      errors: errors.errors,
    });
  }

  let currentTime = Date.now();
  const newAssignment = new Assignment({
    firstName: firstName,
    lastName: lastName,
    repo: repo,
    deployed: deployed,
    timestamp: currentTime,
  });
  console.log(newAssignment);

  await newAssignment.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
