const asyncHandler = require("../utils/async-handler");
const { BadRequestError } = require("../middleware/error");
// const BASE_URL = process.env.ENVAIROMENT === "prod" ? process.env.PROD_BASE_URL : process.env.DEV_BASE_URL;

const uploadVideoHandler = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new BadRequestError("No video provided for upload");
  }

  const fileName = req.file.filename;
  return res.status(200).json({
    videoUrl: `${process.env.BASE_URL}/uploads/videos/${fileName}`,
  });
});

module.exports = {
  uploadVideoHandler,
};

