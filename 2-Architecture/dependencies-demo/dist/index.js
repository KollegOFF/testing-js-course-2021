"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_1 = require("./todo-list");
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
// Composition ROOT
//const ds = new DataService('http://localhost:3000', 'todo-items');
//const ds = new DataServiceFile('./src/data.json')
var ds = inversify_config_1.myContainer.get(types_1.TYPES.IDataService);
var todoList = new todo_list_1.default(ds);
todoList.load().then(function () {
    todoList.showItems();
});
