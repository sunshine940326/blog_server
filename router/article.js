module.exports = (app, router) => {
  const controller = app.controller.article

  router.post('/getArticleList', controller.queryList)
  router.post('/createArticleItem', controller.createArticle)
  router.post('/deleteArticle', controller.deleteArticle)
  router.post('/updateArticle', controller.updateActicale)

  router.post('/userApi/getArticleList', controller.queryList)
  router.post('/userApi/createArticleItem', controller.createArticle)
  router.post('/userApi/deleteArticle', controller.deleteArticle)
  router.post('/userApi/updateArticle', controller.updateActicale)
}