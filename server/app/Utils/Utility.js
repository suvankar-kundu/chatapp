var jwt = require('jwt-simple');
var moment = require('moment');
var HttpStatus = require('http-status-codes');
var User = require('../models/User');

/*
 |--------------------------------------------------------------------------
 | Login Required Middleware
 |--------------------------------------------------------------------------
 */
exports.ensureAuthenticated = function (req, res, next) {
    if (!req.header('Authorization')) {
        return res.status(HttpStatus.UNAUTHORIZED).send({
            message: i18n.__("ensure_Authenticated").fail
        });
    }
    var token = req.header('Authorization').split(' ')[1];

    var payload = null;
    try {
        payload = jwt.decode(token, process.env.TOKEN_SECRET);
    } catch (err) {
        return res.status(HttpStatus.UNAUTHORIZED).send({
            message: err.message
        });
    }

    if (payload.exp <= moment().unix()) {
        return res.status(HttpStatus.UNAUTHORIZED).send({
            message: i18n.__("ensure_Authenticated").token_expire
        });
    }
    req.user = payload.sub;
    User.findOne({
        _id: req.user
    }).populate('role').exec(function (err, result) {
        if (err || !result) {
            if (err === null) {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: i18n.__("ensure_Authenticated").wrongToken
                });
            }
            console.error(`error for : ${err}`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        req.userDetails = result;
        next();
    });
};

/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */
exports.createJWT = function (user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(7300, 'days').unix() //20years
    };
    return jwt.encode(payload, process.env.TOKEN_SECRET);
};
