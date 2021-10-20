const express = require("express");
const userRoute = require('./user.router');
const docsRoute = require('./docs.router');
const authRoute = require('./auth.router')

const router = express.Router();
router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/swagger", docsRoute);
module.exports = router;
