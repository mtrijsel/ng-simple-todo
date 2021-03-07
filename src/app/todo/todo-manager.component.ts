import { Component, OnInit } from "@angular/core";
import { TodoItem } from "./todo-item";
import { TodoListService } from "./todo-list.service";

@Component({
  templateUrl: "./todo-manager.component.html",
  styleUrls: ["./todo-manager.component.css"]
})
export class TodoManagerComponent implements OnInit {
  title = "What To Do?";
  todoList: TodoItem[];

  constructor(private service: TodoListService) {}

  ngOnInit() {
    this.todoList = this.service.getTodoList();
  }

  addTodoItem(title: string): void {
    this.service.addTodoItem({ title });
  }
}
