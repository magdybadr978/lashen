const { rateLimit } =require ('express-rate-limit')
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-8', 
	legacyHeaders: false,
     // Custom handler to send dynamic retry time
    handler: (req, res) => {
        res.status(429).json({
        message: `too many requests, you  can try again after1 minute`,
        });
    },
})
module.exports={
    limiter
}