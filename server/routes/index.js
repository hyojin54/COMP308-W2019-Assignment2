// modules required for routing
let express = require('express');
let router = express.Router();
let passport = require('passport');

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);


/* GET - display login page */
router.get('/login', indexController.displayLoginPage);

/* POST - Process login page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the registration page */
router.get('/register', indexController.displayRegistrationPage);

/* POST - Process the registration page */
router.post('/register', indexController.processRegistrationPage);

/* GET - perform the logout request */
router.get('/logout', indexController.performLogout);

module.exports = router;