migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
