import { Component, OnInit, Input } from '@angular/core'
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  constructor() {}

  ngOnInit() {}
}