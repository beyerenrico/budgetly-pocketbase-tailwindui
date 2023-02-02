migrate((db) => {
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqpbswvb",
    "name": "purpose",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 512,
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
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 64,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqpbswvb",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 512,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
