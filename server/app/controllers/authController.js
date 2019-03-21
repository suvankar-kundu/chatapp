var User = require('../models/User');
var Utility = require('../Utils/Utility');
var constant = require('../config/constant');
var async = require('async');
var HttpStatus = require('http-status-codes');
var mongoose = require('mongoose');

// User Registration function
exports.registration = function (req, res) {
    let hrstart = process.hrtime();
    async.waterfall([
        function (callback) {
            User.findOne({
                username: req.body.username // search the username if it exists or not
            }, function (err, existsUname) {
                if (err || existsUname) {
                    console.error(`${new Error(i18n.__("createAdmin").fail_username)}`);
                    return res.status(HttpStatus.FORBIDDEN).json({
                        message: i18n.__("createAdmin").fail_username
                    });
                } else {
                    callback(null);
                }
            });
        },
        function (callback) {
            User.findOne({
                email: req.body.email
            }, function (err, existsEmail) {
                if (err || existsEmail) {
                    console.error(`${new Error(i18n.__("createAdmin").fail_email)}`);
                    return res.status(HttpStatus.FORBIDDEN).json({
                        message: i18n.__("createAdmin").fail_email
                    });
                } else {
                    callback(null);
                }
            });
        },
        function (callback) {
            User.findOne({
                mobile_no: req.body.mobile_no
            }, function (err, existsMobile) {
                if (err || existsMobile) {
                    console.error(`${new Error(i18n.__("createAdmin").fail_mobile)}`);
                    return res.status(HttpStatus.FORBIDDEN).json({
                        message: i18n.__("createAdmin").fail_mobile
                    });
                } else {
                    callback(null);
                }
            });
        },
        function (callback) {
            var user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                mobile_no: req.body.mobile_no,
                status: constant.USER_STATUS_ACTIVE,
            });
            user.save(function (err, userResult) {
                callback(err, userResult);
            });
        }
    ], function (err, userResult) {
        if (err) {
            console.error(`error for : ${err}`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        let hrend = process.hrtime(hrstart);
        console.time('Execution time for create appointment: %ds %dms', hrend[0], hrend[1] / 1000000);
        userResult.token = Utility.createJWT(userResult);
        return res.status(HttpStatus.OK).json({
            result: {
                user: userResult
            }
        });
    });
};

// User login api for all
exports.login = function (req, res) {
    User.findOne({
        username: req.body.username,
        status: constant.USER_STATUS_ACTIVE
    }).select('+password').exec(function (err, user) {
        if (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        if (!user) {
            console.error(`No user found`);
            return res.status(HttpStatus.UNAUTHORIZED).json({
                message: i18n.__("login").fail
            });
        }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (!isMatch) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    message: i18n.__("login").fail
                });
            }
            console.info(`Login Successful: ${user}`);
            user.token = Utility.createJWT(user);
            return res.status(HttpStatus.OK).json({
                result: {
                    user: user
                }
            });
        });
    });
};



// Logout function
exports.logout = function (req, res) {
    var conditions = {
        _id: mongoose.Types.ObjectId(req.user)
    };
    User.update(conditions, {
        $set: {
            user_status: "logged out"
        }
    }, function (err, result) {
        if (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        return res.status(HttpStatus.OK).json({
            message: i18n.__("message").success,
            result: result
        });
    });
};
