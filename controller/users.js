const express = require("express");
const router = express.Router();
// const User = require("../models/Users");
const db = require("../models/index");
const { validate } = require("../middleware/validator");

router.get("/", (req, res) => {
const {page:pageNumber=0,size:pageSize=2} = req.query;
  db.users
    .findAndCountAll({
      include: { model: db.posts, include: { model: db.comments } },
      limit: pageSize,
      offset: pageSize * pageNumber,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
  console.log("router");
});
router.post("/", validate, (req, res) => {
  console.log(req.body)
  db.users
    .create(req.body)
    .then((response) => {
      res.status(200).send("User Added!!");
    })
    .catch((err) => res.status(400).send(err));
});

router.put("/", validate, async (req, res) => {
  let result = await db.users.findOne({
    where: { userName: req.body.userName },
  });
  if (result) {
    await result.update(req.body);
    await result.save();
    res.status(200).send("User Added!!");
  } else {
    db.users
      .create(req.body)
      .then((response) => {
        res.status(200).send("User Added!!");
      })
      .catch((err) => res.status(400).send(err));
  }
});

router.patch("/", validate, async (req, res) => {
  let result = await db.users.findOne({
    where: { userName: req.body.userName },
  });
  if (result) {
    await result.update(req.body);
    await result.save();
    res.status(200).send("User Added!!");
  } else {
    db.users
      .create(req.body)
      .then((response) => {
        res.status(200).send("User Added!!");
      })
      .catch((err) => res.status(400).send(err));
  }
});

module.exports = router;

// {
//   "userName":"asdd",
//   "firstName":"fname",
//   "lastName":"lName",
//   "DOB":"10-10-1999"
// }
