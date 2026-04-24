import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./shared/tasks.module";
@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule,SharedModule,TasksModule],
})
export class AppModule{

}