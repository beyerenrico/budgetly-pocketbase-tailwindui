migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  collection.createRule = null

  return dao.saveCollection(collection)
})
