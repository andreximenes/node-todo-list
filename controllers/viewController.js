'use strict';

exports.getHome = function(req, res) {
  res.render('index', {
    title : 'Teste EJS'
  });
};
