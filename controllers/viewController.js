'use strict';

exports.getHome = function(req, res) {
  res.render('pages/index', {
    title : 'Home'
  });
};
