import { Component, OnInit } from "@angular/core";
import { TodoItem } from "./todo-item";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  title = "todo-list";
  todoList: TodoItem[] = [
    { title: "install NodeJS" },
    { title: "install Angular CLI" },
    { title: "create new app" },
    { title: "serve app" },
    { title: "develop app" },
    { title: "deploy app" }
  ];

  constructor() {}

  ngOnInit() {}

  addTodoItem(title: string): void {
    this.todoList.push({ title });
  }
}
