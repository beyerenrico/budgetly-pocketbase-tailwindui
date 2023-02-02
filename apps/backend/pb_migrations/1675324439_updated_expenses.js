migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ejptjyquaxh49c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3shclawh",
    "name": "category",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "posve30ju9bla6o",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ydrct3ky",
    "name": "amount",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 9999999999
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ejptjyquaxh49c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3shclawh",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "posve30ju9bla6o",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ydrct3ky",
    "name": "amount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
