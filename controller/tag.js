const withActions = require('./common-actions.js')

module.exports = app => {
  const model = app.model['tag']

  const TagController = withActions(model)({})
  // update
  TagController.updateTag = async ctx => {
    return result = await TagController.updateById(ctx)
  }
  // create
  TagController.createTag = async ctx => {
    return result = await TagController.create(ctx)
  }

  // queryList
  TagController.queryList = async ctx => {
    return result = await TagController.queryAll(ctx)
  }
  // deleteTag
  TagController.deleteTag = async ctx => {
    return result = await TagController.delete(ctx)
  }
  return TagController 
}