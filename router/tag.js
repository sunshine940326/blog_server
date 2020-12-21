module.exports = (app, router) => {
  const controller = app.controller.tag
  
  router.post('/updateTagItem', controller.updateTag)
  router.post('/createTagItem', controller.createTag)
  router.post('/getTagList', controller.queryList)
  router.post('/deleteTag', controller.deleteTag)

  router.post('/userApi/updateTagItem', controller.updateTag)
  router.post('/userApi/createTagItem', controller.createTag)
  router.post('/userApi/getTagList', controller.queryList)
  router.post('/userApi/deleteTag', controller.deleteTag)
}