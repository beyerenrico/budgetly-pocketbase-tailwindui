migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("541tv2ut2k6zaz7");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "541tv2ut2k6zaz7",
    "created": "2023-01-26 17:32:29.066Z",
    "updated": "2023-01-26 18:19:24.925Z",
    "name": "items_months",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oeeacbuf",
        "name": "item",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "0ejptjyquaxh49c",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "zbxezsgj",
        "name": "month",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "9qzw9okuinx87e1",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "b4bk865k",
        "name": "budgetbook",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "vhrl5x139avfaaj",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "fwoltvdw",
        "name": "value",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "cb5o2aa0",
        "name": "rank",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != '' && @request.auth.id = @request.data.user",
    "updateRule": "@request.auth.id = @request.data.user",
    "deleteRule": "@request.auth.id = @request.data.user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
