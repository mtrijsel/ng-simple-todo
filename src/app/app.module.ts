import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./home/hello.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoComponent } from "./todo/todo.component";
import { TodoInputComponent } from "./todo/todo-input.component";
import { TodoItemComponent } from "./todo/todo-item.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
