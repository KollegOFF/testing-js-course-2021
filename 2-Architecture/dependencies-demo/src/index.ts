import DataService from './data-service';
import DataServiceFile from './data-service-file';
import TodoList from './todo-list';
import { myContainer } from "./inversify.config";
import IDataService from './interfaces';
import { TYPES } from "./types";

// Composition ROOT
//const ds = new DataService('http://localhost:3000', 'todo-items');

//const ds = new DataServiceFile('./src/data.json')

const ds = myContainer.get<IDataService>(TYPES.IDataService);
const todoList = new TodoList(ds);

todoList.load().then(() => {
  todoList.showItems();
});
