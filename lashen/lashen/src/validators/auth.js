const Joi = require('joi');
const { namePattern, phonePattern, passwordPattern } = require('./general');
const { roles } = require('../constants/enums.js');

const phoneValidation = Joi.string()
    .pattern(phonePattern)
    .required()
    .messages({
        'string.base': 'Phone number should be a string',
        'string.empty': 'Phone number cannot be empty',
        'string.pattern.base': 'Phone number is invalid',
        'any.required': 'Phone number is required'
    })

const passwordValidation = Joi.string()
    .min(6)
    .required()
    .pattern(passwordPattern)
    .messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password must be at least 6 characters long',
        'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol',
        'any.required': 'Password is required'
    })

const signUp = Joi.object({
        userName: Joi.string()
        .pattern(namePattern)
        .required()
        .min(3)
        .messages({
            'string.base': 'userName must be a string',
            'string.empty': 'userName cannot be empty',
            'string.min': 'userName must be at least 3 characters long',
            'string.pattern.base': 'userName must contain only letters',
            'any.required': 'userName is required'
        }),
    role : Joi.string().valid(...Object.values(roles)),
    phone: phoneValidation,
    password: passwordValidation
});

const loginSchema = Joi.object({
    phone: Joi.string()
        .pattern(phonePattern)
        .required()
        .messages({
            'string.base': 'Phone number should be a string',
            'string.empty': 'Phone number cannot be empty',
            'string.pattern.base': 'Phone number is invalid',
            'any.required': 'Phone number is required'
        }),
    password: Joi.string()
        .min(6)
        .required()
        .pattern(passwordPattern)
        .messages({
            'string.base': 'Password must be a string',
            'string.empty': 'Password cannot be empty',
            'string.min': 'Password must be at least 6 characters long',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol',
            'any.required': 'Password is required'
        })
})

module.exports = {
    signUp,
    loginSchema,
};
