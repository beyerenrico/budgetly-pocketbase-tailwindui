migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  collection.createRule = "@request.auth.id != '' && @request.auth.id = @request.data.user"
  collection.updateRule = "@request.auth.id = @request.data.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
