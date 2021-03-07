import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"]
})
export class TodoInputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = "";

  constructor() {}

  ngOnInit() {}

  changeTitle(title: string): void {
    this.submit.emit(title);
    this.title = "";
  }
}
