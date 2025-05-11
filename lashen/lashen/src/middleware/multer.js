const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { ForbiddenError } = require('../middleware/error');

// Create the uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '..', 'uploads', 'videos');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const videoMulterConfig = {
  storage: storage,
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

