import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "../header/header.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [RouterModule, HeaderModule],
    exports: [DashboardComponent],
})
export class DashboardModule {}