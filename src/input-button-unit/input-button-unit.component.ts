import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  templateUrl: "./input-button-unit.component.html",
  styleUrls: ["./input-button-unit.component.css"]
})
export class InputButtonUnitComponent implements OnInit {
  title: string = "Hello World";

  constructor() {
    this.title = "I hate Angular!";
  }

  ngOnInit() {
    this.title = "Angular sucks!";
  }

  changeTitle(title: string): void {
    console.log(title);
    this.title = title; // the original functionality still works
  }
}
