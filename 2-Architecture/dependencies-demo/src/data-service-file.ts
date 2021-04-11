import IDataService from './interfaces';
import todoItem from './todo-item';
import { injectable } from "inversify";
import "reflect-metadata";

// @ts-ignore
import { readFileSync, writeFile } from 'fs';

@injectable()
export default class DataServiceFile implements IDataService {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  async load(): Promise<any[]> {
    try {
      const dataFromFile = readFileSync(this.fileName);
      const data = JSON.parse(dataFromFile);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  save(item: todoItem): Promise<any> {
    const dataFromFile = readFileSync(this.fileName);
    const data = JSON.parse(dataFromFile);
    data.push(item);
    return writeFile(JSON.stringify(this.fileName), {});
  }
}