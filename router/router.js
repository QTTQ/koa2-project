const router = require('koa-router')();
const HomeController = require('./../controller/home')


module.exports = (app) => {
    // router.get('/', HomeController.index);
    // router.get('/home', HomeController.home)
    // router.get('/home/:id/:name', HomeController.homeParams);
    // router.get('/user', HomeController.login);
    // router.post('/user/register', HomeController.register)
    // app.use(router.routes()).use(router.allowedMethods())
    router.get('/', HomeController.index);
    router.get('/user/login', HomeController.login_in);
    router.get('/user/register', HomeController.register_in);
    // router.get('/user/login_success_index', HomeController.login_success_index);
    router.get('/user/login_success_index', HomeController.login_success_index);
    router.post('/user/login', HomeController.login);
    router.post('/user/register', HomeController.register);
    app.use(router.routes()).use(router.allowedMethods())
}