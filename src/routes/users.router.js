const { getAll, create, getOne, remove, upDate } = require('../controllers/users-controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
	.get(getAll)
    .post(create)

userRouter.route("/:id")
    .get(getOne)
    .delete(remove) 
    .put(upDate)       

module.exports = userRouter;