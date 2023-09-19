import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../header/header.component";

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent
    ],
    imports: [RouterModule],
    exports: [DashboardComponent, HeaderComponent],
})
export class DashboardModule {}