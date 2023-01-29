migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.updateRule = "user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
