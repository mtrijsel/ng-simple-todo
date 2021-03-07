import { Injectable } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";
import { TodoItem } from "./todo-item";
import { TodoItemComponent } from "./todo-item.component";

const todoListLocalStorageKey = "Todo_List";

const defaultTodoList: TodoItem[] = [
  { title: "install NodeJS" },
  { title: "install Angular CLI" },
  { title: "create new app" },
  { title: "serve app" },
  { title: "develop app" },
  { title: "deploy app" }
];

@Injectable()
export class TodoListService {
  todoList: TodoItem[];

  constructor(private localStorageService: LocalStorageService) {
    this.todoList =
      this.localStorageService.getData(todoListLocalStorageKey) ||
      defaultTodoList;
  }

  getTodoList() {
    return this.todoList;
  }

  addTodoItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveTodoList();
  }

  updateTodoItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveTodoList();
  }

  deleteTodoItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveTodoList();
  }

  saveTodoList() {
    this.localStorageService.setData(todoListLocalStorageKey, this.todoList);
  }
}
