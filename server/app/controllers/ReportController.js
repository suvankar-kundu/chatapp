const RuleEngine = require("node-rules");
const ProjectRagMap = require('../models/ProjectRagMap');
const HttpStatus = require('http-status-codes');
const Account = require('../models/Account');
const Project = require('../models/Project');
const _ = require('underscore');
module.exports = {
    async accounts(req, res) {
        try {
			
			let project_report = await ProjectRagMap.find().populate('rag_id');
            project_report.forEach((v) => {
                var R = new RuleEngine(eval(v.rag_id.rule));
                R.execute(v, function (data) {
                    console.log(data.result.performance);
                    console.log("color:" + data.reason);
                    ProjectRagMap.findByIdAndUpdate(data.result._id, {$set: {color: data.reason}}, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                    });
                });
            });
			
			
            let accounts = await Account.find();
            let acc = [];
            for (var i = 0; i < accounts.length; i++) {
                let raginfo = await ProjectRagMap.aggregate({
                    $match: {
                        "project_id": {$in: accounts[i].project_ids}
                    }
                }, {
                    $lookup:
                            {
                                from: "ragcriterias",
                                localField: "rag_id",
                                foreignField: "_id",
                                as: "rag"
                            }
                }, {$group: {
                        _id: {"bucket": "$rag.bucket_name", "ragid": "$rag._id"},
                        raginfo: {$push: "$$ROOT"},
                        color: {$push: "$color"}
                    }
                }, {
                    $project: {
                        bucket_name: '$_id.bucket',
                        raginfo: 1,
                        color: 1,
                        _id: 0
                    }
                });
                
                var array = [];
                var d1 = raginfo;
                d1.forEach((v) => {
                    array.push({bucket_name: v.bucket_name[0], val: v});
                });
                var types = _.groupBy(array, 'bucket_name');
                let finalArray = [];
                types['Governance / Commercial'].forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Governance';
                    finalArray.push(obj);
                });

                types.Engineering.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Engineering';
                    finalArray.push(obj);

                });

                types.Compliance.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Compliance';
                    finalArray.push(obj);

                });

                types.Customer.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Customer';
                    finalArray.push(obj);

                });
                types.People.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'People';
                    finalArray.push(obj);

                });
                var finalBucket = _.groupBy(finalArray, 'bucket_name');
                acc.push({finalBucket: finalBucket, account: accounts[i]});
            }
            return res.status(HttpStatus.OK).json({
                message: i18n.__("report").success,
                result: acc
            });
        } catch (err) {
            console.error(`error for : ${err}`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
    },
    async ragReport(req, res) {
        try {
            let project_report = await ProjectRagMap.find().populate('rag_id');
            project_report.forEach((v) => {
                var R = new RuleEngine(eval(v.rag_id.rule));
                R.execute(v, function (data) {
                    console.log(data.result.performance);
                    console.log("color:" + data.reason);
                    ProjectRagMap.findByIdAndUpdate(data.result._id, {$set: {color: data.reason}}, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                    });
                });
            });
            return res.status(HttpStatus.OK).json({
                message: i18n.__("report").success,
                result: project_report
            });
        } catch (err) {
            console.error(`error for : ${err}`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
    },
    async accountInfo(req, res) {
        try {
            let account = await Account.findOne({"account_name": req.body.account_name});
            ProjectRagMap.aggregate({
                $match: {
                    "project_id": {$in: account.project_ids}
                }
            }, {
                $lookup:
                        {
                            from: "ragcriterias",
                            localField: "rag_id",
                            foreignField: "_id",
                            as: "rag"
                        }
            }, {$group: {
                    _id: {"bucket": "$rag.bucket_name", "ragid": "$rag._id"},
                    raginfo: {$push: "$$ROOT"},
                    color: {$push: "$color"}
                }
            }, {
                $project: {
                    bucket_name: '$_id.bucket',
                    raginfo: 1,
                    color: 1,
                    _id: 0
                }
            }, function (err, data) {
                if (err) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        message: err.message
                    });
                }
                var array = [];
                var d1 = data;
                d1.forEach((v) => {
                    array.push({bucket_name: v.bucket_name[0], val: v});
                });
                var types = _.groupBy(array, 'bucket_name');
                let finalArray = [];
                types['Governance / Commercial'].forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Governance';
                    finalArray.push(obj);
                });

                types.Engineering.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Engineering';
                    finalArray.push(obj);

                });

                types.Compliance.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Compliance';
                    finalArray.push(obj);

                });

                types.Customer.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'Customer';
                    finalArray.push(obj);

                });
                types.People.forEach((v1) => {
                    let p = [];
                    v1.val.raginfo.forEach((v2) => {
                        p.push(v2.performance);
                    });
                    let obj = {};
                    obj.rag = v1.val.raginfo[0].rag[0];
                    obj.performance = p.reduce(function (sum, a) {
                        return sum + parseInt(a)
                    }, 0) / (p.length || 1);

                    obj.color = v1.val.color;
                    obj.bucket_name = 'People';
                    finalArray.push(obj);

                });
                var finalBucket = _.groupBy(finalArray, 'bucket_name');
                return res.status(HttpStatus.OK).json({
                    message: i18n.__("fetch"),
                    result: {
                        user: finalBucket,
                        account: account
                    }
                });
            });

        } catch (err) {
            console.error(`error for : ${err}`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
    },
    async projectInfo(req, res) {
        try {
            let project = await Project.findOne({"project_name": req.body.project_name});

            ProjectRagMap.aggregate({
                $match: {
                    "project_id": project._id
                }
            }, {
                $lookup:
                        {
                            from: "ragcriterias",
                            localField: "rag_id",
                            foreignField: "_id",
                            as: "rag"
                        }
            }, {$group: {
                    _id: '$rag.bucket_name',
                    raginfo: {$push: "$$ROOT"},
                    color: {$push: "$color"}
                }
            }, {
                $project: {
                    bucket_name: '$_id',
                    raginfo: 1,
                    _id: 0,
                    color: 1
                }
            }, function (err, data) {
                if (err) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        message: err.message
                    });
                }

                var rag_color = [];
                var d1 = data;
                d1.forEach((v) => {

                    rag_color.push({bucket_name: v.bucket_name[0], color: v.color});
                });
                return res.status(HttpStatus.OK).json({
                    message: i18n.__("fetch"),
                    result: {
                        user: data,
                        rag_color: rag_color,
                        project: project
                    }
                });
            });
        } catch (err) {
            console.error(`error for : ${err}`);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            });
        }
    }

};


