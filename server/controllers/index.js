/* 
File name: controllers > index.js
Student's name: Hyojin Kim
Student's number: 300950009
Date: February 16, 2019
*/

let express = require('express');

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
  res.render('aboutme/index', { title: 'About Me' });
}

module.exports.displayProjectsPage = (req, res, next) => {
  res.render('projects/index', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) => {
  res.render('services/index', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) => {
  res.render('contact/index', { title: 'Contact' });
}

