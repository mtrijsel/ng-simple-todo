import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HelloComponent } from "./home/hello.component";
import { InputButtonUnitComponent } from "../input-button-unit/input-button-unit.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: "home", component: HelloComponent },
        { path: "tasks", component: InputButtonUnitComponent },
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "**", redirectTo: "home", pathMatch: "full" }
      ],
      { useHash: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
