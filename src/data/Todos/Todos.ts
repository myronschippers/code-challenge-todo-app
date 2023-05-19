import { MOCK_TODO_LIST } from './constants';
import { ITodoItem } from './types';

class Todos {
  private todoList: ITodoItem[] = [];
  private recentId: number = 1;

  constructor(initialTodos: ITodoItem[] = MOCK_TODO_LIST) {
    this.todoList = initialTodos;
    this.recentId = initialTodos[initialTodos.length - 1].id;
  }

  public async removeTodo(todoId: number) {
    const filteredTodoList = this.todoList.filter((todoItem) => todoItem.id !== todoId);

    this.todoList = filteredTodoList;

    return this.todoList;
  }

  public async toggleCompletion(todoId: number) {
    const updatedTodoList = this.todoList.map((todoItem) => {
      if (todoItem.id === todoId) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      }

      return todoItem;
    });

    this.todoList = updatedTodoList;

    return this.todoList;
  }

  public async addTodo(text: string) {
    const newId = (this.recentId += 1);

    this.todoList = [
      ...this.todoList,
      {
        id: newId,
        text,
        completed: false,
        createdAt: new Date(),
      },
    ];

    return this.todoList;
  }

  public get getList() {
    return this.todoList;
  }
}

export const TodosService = new Todos();
