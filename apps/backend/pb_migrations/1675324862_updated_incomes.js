migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  // remove
  collection.schema.removeField("j6enc5o1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c0ate2bo",
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
    "id": "q57bljxz",
    "name": "amount",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 999999
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j6enc5o1",
    "name": "attachements",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/*"
      ],
      "thumbs": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c0ate2bo",
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
    "id": "q57bljxz",
    "name": "value",
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
