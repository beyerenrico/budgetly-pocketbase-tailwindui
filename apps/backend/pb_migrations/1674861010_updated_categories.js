migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p8mvd8ku",
    "name": "planner",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "vhrl5x139avfaaj",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p8mvd8ku",
    "name": "budgetbook",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "vhrl5x139avfaaj",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
