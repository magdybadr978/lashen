let Joi = require("joi")
const { isValidObjectId } = require("mongoose")

const getById = Joi.object({
    id: Joi.string().required().custom((value, helper) => {
        if (!isValidObjectId(value)) return helper.message('invalid Id')
        return true
    })
})

const idValidation = Joi.string().custom((value , helper)=>{
    if(!isValidObjectId(value)) return helper.message("invalid Id");
    return value;
});

const pagination = Joi.object({
    page : Joi.number().min(1).required(),
    limit : Joi.number().min(1).required(),
    name: Joi.string(),
    storeId: idValidation
})

const imageValidation = Joi.string()
  .uri()
  .pattern(/\.webp$/)
  .message('The image URL must end with ".webp".');

const namePattern = /^(?=.*[a-zA-Z\u0621-\u064A])[a-zA-Z\u0621-\u064A\d\s@#$%^&*()\-_!]*$/;

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_-])[A-Za-z\d!@#$%^&*(),.?":{}|<>_-]+$/;
const phonePattern = /^(01|٠١)[0125٠١٢٥][0-9٠-٩]{8}$/;
const emailPattern = /^[^\u0600-\u06FF]+$/;
const colorPattern = /^#[0-9A-Fa-f]{6}$/;


module.exports =
{
    getById,
    pagination,
    idValidation,
    namePattern,
    passwordPattern,
    phonePattern,
    emailPattern,
    colorPattern,
    imageValidation
}