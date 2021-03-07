import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { TodoItem } from "./todo-item";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html"
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeItem(item: TodoItem) {
    this.remove.emit(this.item);
  }
}
