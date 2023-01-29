migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
