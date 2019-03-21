var Joi = require('joi');
var cf = require('../config/constant');

module.exports = {
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    },
    register: {
        body: {
            email: Joi.string().required().email(),
            password: Joi.string().required().regex(cf.REG_EXP, {
                name: 'Password'
            }),
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            username: Joi.string().required(),
            mobile_no: Joi.string().required().regex(cf.MOBILE_REGEX).error(errors => {
                return {
                    message: "Mobile number doesn't match the specified pattern"
                };
            })
        }
    }
};