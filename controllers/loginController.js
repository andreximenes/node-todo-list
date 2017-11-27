'use strict';

exports.login = function(req, res) {
  res.render('pages/login/login', { 
    title : 'Login'
  }); 
};

exports.logout = function(req, res) {
  res.render('pages/login/logout',{
    title : 'Logout'
  });
};

exports.profile = function(req, res) {
  res.render('pages/login/profile',{
    title : 'Profile'
  });
};



