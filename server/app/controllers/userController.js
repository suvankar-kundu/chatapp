var User = require('../models/User');
var RAGCriteria = require('../models/RAGCriteria');
var Account = require('../models/Account');
var Project = require('../models/Project');
var ProjectRagMap = require('../models/ProjectRagMap');
var constant = require('../config/constant');
var HttpStatus = require('http-status-codes');
var _ = require('underscore');

// Fetch User Details
exports.details = function (req, res) {
    User.findOne({
        _id: req.user,
        status: constant.USER_STATUS_ACTIVE
    }).exec(function (err, user) {
        if (err) {
            console.error(`error for : ${err}`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        if (!user) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: i18n.__("fetchUserDetails")
            });
        }
        user.profile_pic = req.protocol + '://' + req.headers.host + '/' + user.profile_pic;
        console.info(`User Details Fetched: ${user}`);
        return res.status(HttpStatus.OK).json({
            message: i18n.__("fetch"),
            result: {
                user: user
            }
        });
    });

};
exports.insert_rag_criteria = function (req, res) {
    var rag = [{"bucket_name": "Engineering", "metric_name": "Effort Varience", "uom": "%", "target": "95", "rule": "[{'condition':function(R){R.when(this.performance<90);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=95);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=90&&this.performance<95);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Engineering", "metric_name": "On Time Delivery (%) *", "uom": "%", "target": "95", "rule": "[{'condition':function(R){R.when(this.performance<90);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=95);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=90&&this.performance<95);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Engineering", "metric_name": "Customer Experience (Defect Free Delivery )", "uom": "%", "target": "95", "rule": "[{'condition':function(R){R.when(this.performance<90);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=95);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=90&&this.performance<95);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Engineering", "metric_name": "Effort Varience", "uom": "%", "target": "95", "rule": "[{'condition':function(R){R.when(this.performance<90);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=95);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=90&&this.performance<95);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Governance / Commercial", "metric_name": "Onsite Subcon Index(%)", "uom": "%", "target": "95", "rule": "[{'condition':function(R){R.when(this.performance<90);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=95);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=90&&this.performance<95);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Governance / Commercial", "metric_name": "Offshoring Index (%)", "uom": "%", "target": "95", "rule": "[{'condition':function(R){R.when(this.performance<90);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=95);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=90&&this.performance<95);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Governance / Commercial", "metric_name": "Leakage Index (%)", "uom": "%", "target": "95", "rule": "[{'condition':function(R){R.when(this.performance<90);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=95);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=90&&this.performance<95);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Compliance", "metric_name": "Open NCs beyond 30 days", "uom": "Count", "target": "5", "rule": "[{'condition':function(R){R.when(this.performance>=15);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance<=5);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>5&&this.performance<15);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Compliance", "metric_name": "Project Maturity (L1 + L2)", "uom": "%", "target": "10", "rule": "[{'condition':function(R){R.when(this.performance>15);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance<=10);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>10&&this.performance<=15);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Compliance", "metric_name": "Project Maturity (L3)", "uom": "%", "target": "60", "rule": "[{'condition':function(R){R.when(this.performance<50);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=60);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=50&&this.performance<60);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Customer", "metric_name": "PSAT", "uom": "Score", "target": "4.3", "rule": "[{'condition':function(R){R.when(this.performance<3.8);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=4.30);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=3.8&&this.performance<4.30);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Customer", "metric_name": "CAPS (% Customers with CAPS score >=7)", "uom": "%", "target": "93", "rule": "[{'condition':function(R){R.when(this.performance<=80);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=93);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>80&&this.performance<=93);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "Customer", "metric_name": "No. of Open Customer Escalations & penalty", "uom": "Count", "target": "0", "rule": "[{'condition':function(R){R.when(this.performance>1);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance==0);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance==1);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}, {"bucket_name": "People", "metric_name": "CI Compliance %", "uom": "%", "target": "80", "rule": "[{'condition':function(R){R.when(this.performance<70);},'consequence':function(R){this.result=this;this.reason='Red';R.stop();}},{'condition':function(R){R.when(this.performance>=80);},'consequence':function(R){this.result=this;this.reason='Green';R.stop();}},{'condition':function(R){R.when(this.performance>=70&&this.performance<80);},'consequence':function(R){this.result=this;this.reason='Yellow';R.stop();}}]"}];

    RAGCriteria.insertMany(rag)
            .then(function (mongooseDocuments) {
                res.status(200).json({message: 'all categories inserted', result: mongooseDocuments});
            })
            .catch(function (err) {
                res.status(500).json({message: err.message});
            });
};
exports.prep_account = function (req, res) {
    var account = new Account({
        "account_name": req.body.account_name,
        "sbu": req.body.sbu,
        "ibg": req.body.ibg,
        "fte": req.body.fte
    });
    account.save(function (err) {
        if (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        return res.status(HttpStatus.OK).json({
            message: i18n.__("fetch"),
            result: {
                user: null
            }
        });
    });
};
exports.prep_project = function (req, res) {
    var proj = new Project({"project_name": req.body.project_name});
    proj.save(function (err, proj) {
        if (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        Account.findByIdAndUpdate(req.body.account_id,
                {
                    $push: {"project_ids": proj._id}
                },
                {"new": true, "upsert": true},
                function (err) {
                    if (err) {
                        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                            message: err.message
                        });
                    }
                    return res.status(HttpStatus.OK).json({
                        message: i18n.__("fetch"),
                        result: {
                            user: null
                        }
                    });
                }
        );
    });

};
exports.prep_project_rag_map = function (req, res) {
    var proj = new ProjectRagMap({"project_id": req.body.project_id,
        "performance": req.body.performance,
        "rag_id": req.body.rag_id});
    proj.save(function (err, proj) {
        if (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
        return res.status(HttpStatus.OK).json({
            message: i18n.__("fetch"),
            result: {
                user: proj
            }
        });

    });
};


