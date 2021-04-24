import TodoItem from './todo-item';
import DataService from './data-service';
import IDataService from './interfaces';

export default class TodoList {
  dataService: any;
  items: TodoItem[];

  constructor(dataService: IDataService, names: string[] = []) {
    this.dataService = dataService;
    this.items = names.map((name) => new TodoItem(name));
  }

  setDataService(dataService: IDataService) {
    this.dataService = dataService;
  }

  async load() {
    //let dataService = new DataService('http://localhost:3000'); // Bad way!!
    const itemsArray = await this.dataService.load();
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

  addItem(name: string) {
    this.items.push(new TodoItem(name));
  }

  done(index: number) {
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