const { json, Router } = require('express');
const apiController = require('../controllers/api');
const todoController = require('../controllers/todo');
const userController = require('../controllers/user');
const errorController =  require('../controllers/error');
const authController = require('../controllers/auth');
const { ensureAuth } = require('../middlewares/auth');

const apiRouter = Router();
const jsonParser = json();

apiRouter.route('/')
  .get(apiController.index);

// apiRouter.get('/', apiController.index);

apiRouter.route('/me')
  .get(authController.index)
  .post(jsonParser, authController.store);

apiRouter.route('/me/todos')
  .get(ensureAuth, todoController.index)
  .post(ensureAuth, jsonParser, todoController.store);

apiRouter.route('/me/todos/:id')
  .get(ensureAuth, todoController.show)
  .put(ensureAuth, jsonParser, todoController.update)
  .delete(ensureAuth, todoController.destroy);


apiRouter.route('/user')
  .post(jsonParser, userController.store);

// Error Handler
apiRouter.use(errorController.notFound);
apiRouter.use(errorController.index);

module.exports = apiRouter;