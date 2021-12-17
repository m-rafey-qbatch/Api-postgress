const express = require("express");
const router = express.Router();
const db = require("../models/index");
const Post = db.posts;
router.get("/", async (req, res) => {
  let result = Post.findAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.get("/:id", async (req, res) => {
  let user = req.params.id;

  Post.findAll({ where: { userId: user } })
    .then((response) => {
      console.log(response);
      if (response.length == 0) {
        res.status(404).send("Posts Not Found");
      } else {
        res.status(200).send(response);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.post("/", (req, res) => {
  Post.create(req.body)
    .then((response) => {
      res.status(200).send("Post Added!!");
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;

// {
//     "title":"English",
//     "description":"a quick brown fox",
//     "userId":1
// }
