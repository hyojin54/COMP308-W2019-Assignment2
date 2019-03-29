/* 
File name: routes > index.js
Student's name: Hyojin Kim
Student's number: 300950009
Date: February 16, 2019
*/

let express = require('express');
let router = express.Router();

/* GET Home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* GET About me page. */
router.get('/about', (req, res, next) => {
  res.render('aboutme/index', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects/index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', (req, res, next) => {
  res.render('services/index', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact/index', { title: 'Contact Me' });
});

module.exports = router;
