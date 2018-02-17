const { json, Router } = require('express');
const apiController = require('../controllers/api');
const todoController = require('../controllers/todo');
const errorController =  require('../controllers/error');

const apiRouter = Router();
const jsonParser = json();

apiRouter.get('/', apiController.index);

apiRouter.route('/me/todos')
  .get(todoController.index)
  .post(jsonParser, todoController.store);

apiRouter.route('/me/todos/:id')
  .get(todoController.show)
  .put(jsonParser, todoController.update)
  .delete(todoController.destroy);


// Error Handler
apiRouter.use(errorController.notFound);

module.exports = apiRouter;