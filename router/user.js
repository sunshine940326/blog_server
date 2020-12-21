module.exports = (app, router) => {
  const controller = app.controller.user

  router.post('/login', controller.login)
  router.post('/createUser', controller.createUser)
  router.post('/deleteUser', controller.deleteUser)
  router.post('/getUserList', controller.queryUser)

  router.post('/userApi/login', controller.login)
  router.post('/userApi/createUser', controller.createUser)
  router.post('/userApi/deleteUser', controller.deleteUser)
  router.post('/userApi/getUserList', controller.queryUser)
}