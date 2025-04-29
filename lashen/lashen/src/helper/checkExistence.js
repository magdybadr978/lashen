const User=require("../models/user")
const {phoneAlreadyExists,emailAlreadyExists}=require("../constants/messages")
const {BadRequestError}=require("../middleware/error")
const checkPhoneExists=async(phone,locale)=>{
    let checkPhone=await User.findOne({phone})
    if(checkPhone)throw new BadRequestError(phoneAlreadyExists[locale]);
    return checkPhone
}

const checkEmailExists=async(email,locale)=>{
     let checkEmail=await User.findOne({email})
    if(checkEmail)throw new BadRequestError(emailAlreadyExists[locale]);

}


module.exports={
    checkPhoneExists,
    checkEmailExists
}