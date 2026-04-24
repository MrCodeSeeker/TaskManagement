import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { task } from './task/task.model';
import { TaskService } from './task/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone:false
})
export class TasksComponent {
  @Input() selectedUser!: User;
constructor(private taskService:TaskService){
}
  onAddTask() {
    this.isAddingTask = true;
  }
  isAddingTask = false;
  
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.selectedUser.id);
  }
  onCompleteTask(task: task) { 
    return this.taskService.onCompleteTasks(task.userId, task.id);
  }
  onCancelClick(){
    //alert('Cancel Clicked');
    this.isAddingTask = false;
  }
  onCreateClick(){
    this.isAddingTask = false;
  }
}
