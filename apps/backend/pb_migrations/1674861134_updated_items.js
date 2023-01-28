migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ejptjyquaxh49c")

  collection.name = "expenses"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfh4nv58",
    "name": "date",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e4jqtihm",
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
  const collection = dao.findCollectionByNameOrId("0ejptjyquaxh49c")

  collection.name = "items"

  // remove
  collection.schema.removeField("jfh4nv58")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e4jqtihm",
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
