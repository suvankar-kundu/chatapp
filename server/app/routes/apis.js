var express = require('express');
var validate = require('express-validation');
var router = express.Router();
var Middleware = require('../Utils/Utility');

var validation = require('../validation/validation');



// Require controller modules
var AuthController = require('../controllers/authController');
var UserController = require('../controllers/userController');
var ReportController = require('../controllers/ReportController');

/**
 * Authentication routing
 */
router.post('/registration', validate(validation.register), AuthController.registration);
router.post('/admin/login', validate(validation.login), AuthController.login);


/**
 * User routing
 */
router.get('/user/details', Middleware.ensureAuthenticated, UserController.details);
router.post('/rag', UserController.insert_rag_criteria);
router.post('/account', UserController.prep_account);
router.post('/project', UserController.prep_project);
router.post('/project_rag', UserController.prep_project_rag_map);

router.get('/accounts', ReportController.accounts);
router.get('/rag_report1', ReportController.ragReport);
router.post('/accountInfo',ReportController.accountInfo);
router.post('/projectInfo',ReportController.projectInfo);
module.exports = router;