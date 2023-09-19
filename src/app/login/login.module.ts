import { NgModule } from "@angular/core";
import { InfoComponent } from "./info/info.component";
import { FormComponent } from "./form/form.component";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [LoginComponent, InfoComponent, FormComponent],
    exports: [LoginComponent]
})

export class LoginModule {}