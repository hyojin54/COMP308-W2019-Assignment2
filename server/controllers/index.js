/* 
File name: controllers > index.js
Student's name: Hyojin Kim
Student's number: 300950009
Date: February 16, 2019
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define models
let UserModel = require('../models/user');
let user = UserModel.User;

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { 
    title: 'Home',
    displayName: req.user ? req.user.displayName : ""
   });
}

module.exports.displayAboutPage = (req, res, next) => {
  res.render('aboutme/index', { 
    title: 'About Me',
    displayName: req.user ? req.user.displayName : ""
   });
}

module.exports.displayProjectsPage = (req, res, next) => {
  res.render('projects/index', { 
    title: 'Projects',
    displayName: req.user ? req.user.displayName : ""
   });
}

module.exports.displayServicesPage = (req, res, next) => {
  res.render('services/index', { 
    title: 'Services',
    displayName: req.user ? req.user.displayName : ""
   });
}

module.exports.displayContactPage = (req, res, next) => {
  res.render('contact/index', { 
    title: 'Contact',
    displayName: req.user ? req.user.displayName : ""
   });
}

module.exports.displayLoginPage = (req, res, next) => {
  // check to see if the user is not already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : ""
    });
  } 
  else {
    // redirects to the root
    return res.redirect("/");
  }    
}

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // server error
    if (err) {
      return next(err);
    }
    // user login error
    if (!user) {
      req.flash("loginMessage", "Login Error");
      return res.redirect('/login');
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // redirects to the root
      return res.redirect('/');
    });
  })(req, res, next);
}

module.exports.displayRegistrationPage = (req, res, next) => {
  // check to see if the user is not already logged in
  if(!req.user) {
    res.render('auth/register', {
      title: "Register",
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
  } 
  else {
    // user is already registered
    return res.redirect('/'); 
  }
}

module.exports.processRegistrationPage = (req, res, next) => {
  // create user model
  let newUser = new user({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName
  });

  // register method to add a new user
  user.register(newUser, req.body.password, (err) => {    
    if (err) {
      console.log('Error inserting new user');
      if(err.name == "UserExistsError") {
        req.flash('registerMessage', 'Registration Error: User Already Exists');
      }

      return res.render('auth/register', {
        title: "Register",
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
    }

    // redirect the user (registration is successful)
    return passport.authenticate('local')(req, res, ()=> {
      res.redirect('/');
    });
  });
}

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect('/'); // redirects back to home page
}

