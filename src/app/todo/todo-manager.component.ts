import { Component, OnInit } from "@angular/core";
import { TodoItem } from "./todo-item";

@Component({
  templateUrl: "./todo-manager.component.html",
  styleUrls: ["./todo-manager.component.css"]
})
export class TodoManagerComponent implements OnInit {
  title = "What To Do?";
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