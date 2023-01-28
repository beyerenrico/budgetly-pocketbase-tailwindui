migrate((db) => {
  const collection = new Collection({
    "id": "0g5nvzqfubcjxvz",
    "created": "2023-01-27 23:15:56.125Z",
    "updated": "2023-01-27 23:15:56.125Z",
    "name": "incomes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "7kebvx5j",
        "name": "date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "z31u0yjz",
        "name": "planner",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "vhrl5x139avfaaj",
          "cascadeDelete": false
        }
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0g5nvzqfubcjxvz");

  return dao.deleteCollection(collection);
})
