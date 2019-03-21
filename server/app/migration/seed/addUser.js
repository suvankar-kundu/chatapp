var async = require('async');
const dotenv = require("dotenv");
const dotenvParseVariables = require('dotenv-parse-variables');
// Parse config file
global.dotenv = dotenv;
let env = dotenv.load();
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);
process.env = env;
var databaseURL = process.env.DATABASE_URL;
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var User = require('../../models/User');

async.series([
        function (callback) {
            MongoClient.connect(databaseURL, function (err, db) {

                if (err)
                    throw err;
                db.dropDatabase(function (err, result) {
                    db.close(true, function (err, result) {
                        callback(null, 'SUCCESS - dropped database');
                    });
                });
            });
        },

        // Second function - connect to MongoDB using mongoose, which is an asynchronous call
        function (callback) {

            // Open connection to MongoDB
            mongoose.connect(databaseURL, {
                useMongoClient: true
            });
            mongoose.Promise = global.Promise;
            mongoose.connection.on('connected', function () {
                console.log('db connected via mongoose');
                callback(null, 'SUCCESS - Connected to mongodb');
            });
        },

        // Third function - use Mongoose to create a User model and save it to database
        function (callback) {
            var users = [];
            var testUserCount = 1;
            for (let i = 0; i < testUserCount; i++) {

                var user = new User({
                    first_name: "Super",
                    last_name: "Admin",
                    email: "admin@chatapp.com",
                    mobile_no: "123456789",
                    username: "superadmin",
                    password: "Superadmin123#$",
                });
                users.push(user);
            }

            console.log("Populating database with %s users", users.length);
            async.eachSeries(
                // 1st parameter is the 'users' array to iterate over 
                users,
                function (user, userSavedCallBack) {
                    user.save(function (err) {
                        if (err) {
                            console.dir(err);
                        }
                        console.log("Saving user #%s out of %s", user.first_name, testUserCount);
                        userSavedCallBack();
                    });

                },
                function (err) {
                    if (err)
                        console.dir(err);

                    callback(null, 'SUCCESS - Seed database');

                }
            );

        }
    ],
    // This function executes when everything above is done
    function (err, results) {
        console.log("\n\n--- Database seed progam completed ---");
        if (err) {
            console.log("Errors = ");
            console.dir(errors)
        } else {
            console.log("Results = ");
            console.log(results);
        }
        console.log("\n\n--- Exiting database seed progam ---");
        process.exit(0);
    });