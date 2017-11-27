'use strict';
module.exports = function(app, passport) {
  var todoList = require('../controllers/todoListController');
  var viewController = require('../controllers/viewController');
  var loginController = require('../controllers/loginController');

  // todoList Routes
  app.route('/api/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/api/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  // views
  app.get('/', viewController.getHome);
  app.get('/login', loginController.login);
  app.get('/profile', isLoggedIn, loginController.profile);
  
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

  //link que estou usando para estudo
  //https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-application-structure

  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
    if (res.isAuthenticated()) {
      console.log('Usuário Logado');
      return next();  
    }
        
    res.redirect('/login');
  }

};
