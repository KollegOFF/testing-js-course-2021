import TodoItem from "../src/todo-item";
import TodoList from "../src/todo-list";

describe('Todo List tests', () => {

  test('Load items sucessfully', async () => {
    // Arrange
    expect.hasAssertions();

    const items = ['Test item 1', 'Test item 2'];
    const expectedItems = items.map((item) => {
      return new TodoItem(item);
    });

    const dataService = {
      // async load() {
      //   return Promise.resolve(expectedItems);
      // }
    };

    dataService.load = jest.fn().mockResolvedValue(expectedItems);

    const todoList = new TodoList(dataService);

    //Act
    await todoList.load();

    //Assert
    expect(todoList.items).toEqual(expectedItems);

  });

  test('Save items sucessfully', () => {
    // Arrange
    expect.assertions(5);

    const sourceItems = [
      {
        name: 'Test item 1',
        isDone: false
      },
      {
        name: 'Test item 2',
        isDone: true
      },
      {
        name: 'Test item 3',
        isDone: false
      }
    ];

    const expectedItems = sourceItems.filter((item) => !item.isDone);

    let savedData = [];

    const dataService = {
      // save(item) {
      //   savedData.push(item);
      // }
    };

    dataService.save = jest.fn();

    const todoList = new TodoList(dataService);
    todoList.items = JSON.parse(JSON.stringify(sourceItems));

    const expectedTimesToCall = 2;

    //Act
    todoList.save();

    //Assert
    expect(dataService.save).toHaveBeenCalledTimes(expectedTimesToCall);

    for (let i = 0; i < expectedTimesToCall; i++) {
      expect(dataService.save.mock.calls[i][0]).toEqual(expectedItems[i]);
      expect(dataService.save.mock.calls[i].length).toBe(1);
    }
  });
});
