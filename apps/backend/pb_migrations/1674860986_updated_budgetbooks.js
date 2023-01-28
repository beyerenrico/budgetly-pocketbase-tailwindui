migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.name = "planners"

  // remove
  collection.schema.removeField("x4o99mdx")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.name = "budgetbooks"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x4o99mdx",
    "name": "year",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 9999
    }
  }))

  return dao.saveCollection(collection)
})
