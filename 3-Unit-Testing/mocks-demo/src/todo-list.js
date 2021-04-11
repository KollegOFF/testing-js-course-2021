import TodoItem from './todo-item';
import DataService from './data-service';
import fetch from 'node-fetch';

export default class TodoList {
  constructor(dataService, names = []) {
    this.dataService = dataService;
    this.items = names.map((name) => new TodoItem(name));
  }

  async load() {
    //let dataService = new DataService('http://localhost:3000'); // Bad way!!
    const itemsArray = await this.dataService.load();
    const newArray = JSON.parse(JSON.stringify(itemsArray));
    this.items = newArray.map((item) => new TodoItem(item.name));
  }

  async badLoad() {
    try {
      const response = await fetch(`${this.url}/${this.endPointName}`, {});
      const itemsArray = await response.json();
      const newArray = JSON.parse(JSON.stringify(itemsArray));
      this.items = newArray.map((item) => new TodoItem(item.name));
    } catch (error) {
      throw new Error(error);
    }
  }

  async loadWithNoDI() {
    let dataService = new DataService('http://localhost:3000'); // Bad way!!
    const itemsArray = await dataService.load();
    const newArray = JSON.parse(JSON.stringify(itemsArray));
    this.items = newArray.map((item) => new TodoItem(item.name));
  }

  save() {
    let saveResult = [];
    this.items.filter((item) => !item.isDone).forEach((item) => {
      saveResult.push(this.dataService.save(item));
    });

    return saveResult;
  }

  addItem(name) {
    this.items.push(new TodoItem(name));
  }

  done(index) {
    this.items[index].done();
  }

  clear() {
    this.items = this.items.filter((item) => !item.isDone);
  }

  showItems() {
    this.items.forEach((item) => {
      // @ts-ignore
      console.log(`Что сделать: ${item.name}`);
      // @ts-ignore
      console.log(`Выполнено: ${item.isDone ? 'Да' : 'Нет'}`);
      // @ts-ignore
      console.log('------------------------\n');
    });
  }
}