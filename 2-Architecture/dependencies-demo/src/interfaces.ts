import TodoItem from './todo-item';

export default interface IDataService {
  load(): Promise<any[]>;
  save(item: TodoItem): Promise<any>;
}