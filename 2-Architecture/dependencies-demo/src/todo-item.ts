export default class TodoItem {
  name: string;
  isDone: boolean;

  constructor(name: string) {
    this.name = name;
    this.isDone = false;
  }

  done() {
    this.isDone = true;
  }
}