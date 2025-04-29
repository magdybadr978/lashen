const multer = require('multer');
const { ForbiddenError } = require('../middleware/error');

// Multer configuration for video files (in-memory)
const videoMulterConfig = {
  storage: multer.memoryStorage(),
  limits: {
    fileSize: +process.env.MAX_VIDEO_SIZE,
  },
  fileFilter: (req, file, cb) => {
    const regex = /^video\//g;
    if (file.mimetype.match(regex)) {
      cb(null, true);
    } else {
      cb(new ForbiddenError('Only video files are allowed to be uploaded'), false);
    }
  },
};

module.exports.uploadVideo = multer(videoMulterConfig).single('video');
