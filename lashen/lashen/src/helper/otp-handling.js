const {sendOtp}=require("./../utils/send-otp")
const{generateOtp,expireOTP}=require("./../utils/generate-otp")
const otpHandling=async(user)=>{
    let otp
    if (process.env.ENVAIROMENT == "dev") otp = "1234"
    else otp = generateOtp()
    let otpExpires = expireOTP();
    await sendOtp(user)
    return{otp,otpExpires}
}
module.exports={otpHandling}