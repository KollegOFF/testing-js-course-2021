import { Container } from "inversify";
import { TYPES } from "./types";
import IDataService from './interfaces';
import DataService from './data-service';

const myContainer = new Container();
myContainer.bind<IDataService>(TYPES.IDataService).to(DataService);

export { myContainer };