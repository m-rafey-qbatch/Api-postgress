const express = require("express");
const router = express.Router();
const db = require("../models/index");
router.get("/", (req, res) => {
  db.teachers
    .findAll() 
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});
router.post("/", (req, res) => {
  db.teachers
    .create(req.body)
    .then((response) => {
      res.status(200).send("Teacher Added!!");
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;

