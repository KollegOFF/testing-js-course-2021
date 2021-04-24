import fetch from 'node-fetch';
import TodoItem from './todo-item'
import IDataService from './interfaces';
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class DataService implements IDataService {
  url: string;
  endPointName: string;

  constructor(url: string, endPointName: string) {
    this.url = url;
    this.endPointName = endPointName;
  }

  async load(): Promise<any[]> {
    try {
      const response = await fetch(`${this.url}/${this.endPointName}`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  save(item: TodoItem): Promise<any> {
    const data = JSON.stringify(item);
    return fetch(`${this.url}/${this.endPointName}`, {
      mathod: 'POST',
      body: data,
    });
  }
}