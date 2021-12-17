const express = require("express");
const router = express.Router();
const db=require('../models/index')
const Comment=db.comments;

router.get("/", async (req, res) => {
  let result = Comment.findAll()

// await Comment.scope('firstPost').findAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.get("/:id", async (req, res) => {
  let postId = req.params.id;

  Comment.findAll({ where: { postId: postId } })
    .then((response) => {
      console.log(response)
      if (response.length==0) {
        res.status(404).send("Comments Not Found");
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
  Comment.create(req.body)
    .then((response) => {
        if (response.length==0) {
            res.status(404).send("Comments Not Found");
          } else {
            res.status(200).send(response);
          }
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;

// {
//     "title":"English",
//     "description":"a quick brown fox",
//     "userId":1
// }
