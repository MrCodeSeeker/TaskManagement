import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { TaskComponent } from "../tasks/task/task.component";
import { TasksComponent } from "../tasks/tasks.component";

import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TasksComponent,TaskComponent,NewTaskComponent],
    exports: [TasksComponent],
    imports: [CommonModule,FormsModule,SharedModule],
})  
export class TasksModule { }