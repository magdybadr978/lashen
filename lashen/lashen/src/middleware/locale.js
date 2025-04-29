// middlewares/locale.js
exports.localeMiddleware = (req, res, next) => {
    req.locale = req.headers['locale']?.toLowerCase() || "en";
    next();
};


