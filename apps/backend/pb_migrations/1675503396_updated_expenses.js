migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ejptjyquaxh49c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmk6z3ki",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 64,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ejptjyquaxh49c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmk6z3ki",
    "name": "sender",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 64,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
