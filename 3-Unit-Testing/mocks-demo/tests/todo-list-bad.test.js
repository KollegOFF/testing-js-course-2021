import TodoItem from "../src/todo-item";
import TodoList from "../src/todo-list";
import { mockExpectedLoadData } from './fixtures';

jest.mock('node-fetch', () => jest.fn().mockImplementation(() => ({
  json: jest.fn().mockResolvedValue(mockExpectedLoadData)
})));

// Заглушка модуля, в котором экспортируются инстанциируемый класс
jest.mock('../src/data-service', () => jest.fn().mockImplementation(function mockDataService() {
  this.load = jest.fn().mockResolvedValue(mockExpectedLoadData);
}));

describe('Todo List bad implementations tests', () => {
  test('Load items sucessfully using bad load', async () => {
    // Arrange
    expect.hasAssertions();

    const items = ['Test item 1', 'Test item 2'];
    const expectedItems = items.map((item) => {
      return new TodoItem(item);
    });

    const todoList = new TodoList({});

    //Act
    await todoList.badLoad();

    //Assert
    expect(todoList.items).toEqual(expectedItems);

  });

  test('Load items sucessfully using bad load with no DI', async () => {
    // Arrange
    expect.hasAssertions();

    const items = ['Test item 1', 'Test item 2'];
    const expectedItems = items.map((item) => {
      return new TodoItem(item);
    });

    const todoList = new TodoList({});

    //Act
    await todoList.loadWithNoDI();

    //Assert
    expect(todoList.items).toEqual(expectedItems);

  });
});