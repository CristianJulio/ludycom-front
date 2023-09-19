import { NgModule } from "@angular/core";
import { InfoComponent } from "./info/info.component";
import { FormComponent } from "./form/form.component";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [LoginComponent, InfoComponent, FormComponent],
    imports: [RouterModule],
    exports: [LoginComponent]
})

export class LoginModule {}