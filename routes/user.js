const { Router } = require('express');
//const { User } = require("./../models");
const router = Router();
const asyncHandler = require("./../utils/async-handler");

router.post("/signUp", asyncHandler((req, res, next) => {
    const { email, password, name } = req.body;
    console.log(email, password, name);
}))

module.exports = router;