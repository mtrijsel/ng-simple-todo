import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./home/hello.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoManagerComponent } from "./todo/todo-manager.component";
import { TodoInputComponent } from "./todo/todo-input.component";
import { TodoItemComponent } from "./todo/todo-item.component";
import { TodoListService } from "./todo/todo-list.service";
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoManagerComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  bootstrap: [AppComponent],
  providers: [TodoListService, LocalStorageService]
})
export class AppModule {}
