import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./home/hello.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoComponent } from './todo/todo.component';
import { InputButtonUnitComponent } from "../input-button-unit/input-button-unit.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, TodoComponent, InputButtonUnitComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
