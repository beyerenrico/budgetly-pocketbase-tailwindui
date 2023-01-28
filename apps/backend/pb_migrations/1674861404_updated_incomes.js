migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j6enc5o1",
    "name": "attachement",
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

  return dao.saveCollection(collection)
})
