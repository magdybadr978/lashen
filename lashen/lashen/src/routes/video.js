const router = require("express").Router();
const { uploadVideo } = require("../middleware/multer");
const { uploadVideoHandler } = require("../controllers/video");

router.post("/upload", uploadVideo, uploadVideoHandler);

module.exports = router;
