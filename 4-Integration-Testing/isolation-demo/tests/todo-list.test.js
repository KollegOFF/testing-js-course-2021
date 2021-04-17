import TodoItem from "../src/todo-item";
import TodoList from "../src/todo-list";
import DataService from '../src/data-service';

describe('Todo List tests', () => {

  test('Load items sucessfully', async () => {
    // Arrange
    expect.hasAssertions();

    const items = ['Сварить борщ', 'Сходить в тренажерный зал'];
    const expectedItems = items.map((item) => {
      return new TodoItem(item);
    });

    const dataService = new DataService('http://localhost:3000', 'todo-items');
    const todoList = new TodoList(dataService);

    //Act
    await todoList.load();

    //Assert
    expect(todoList.items).toEqual(expectedItems);

  });
});
