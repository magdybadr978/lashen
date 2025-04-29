const router = require("express").Router()


const authRoutes = require("./auth");
const quizRoutes = require("./quiz.js");
const attackRoutes = require("./attack.js");
const feedbackRoutes = require("./feedback.js");
const videoRoutes = require("./video.js");



router.use("/auth", authRoutes);
router.use("/quiz",quizRoutes);
router.use("/attack",attackRoutes);
router.use("/feedback",feedbackRoutes);
router.use("/video",videoRoutes);



module.exports = router