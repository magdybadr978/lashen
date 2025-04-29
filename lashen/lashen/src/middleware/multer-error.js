const { BAD_REQUEST } = require("../constants/status-codes");

module.exports = (err, req, res, next) => {
    if (err.message === "File too large" && err.code === "LIMIT_FILE_SIZE" &&
        (err.field === "file" || err.field === "image" || err.field === "commercialAndTaxFile")) {

        err.status = BAD_REQUEST;
        err.message = "The uploaded file is too large. Please ensure the file size is within the allowed limit.";
        return res.status(err.status).json({ error: err.message });
    }
    else next(err);
};
