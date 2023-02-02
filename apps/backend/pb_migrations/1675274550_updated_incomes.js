migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egzzpbef",
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
    "id": "5qsr3tey",
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
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egzzpbef",
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
    "id": "5qsr3tey",
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
