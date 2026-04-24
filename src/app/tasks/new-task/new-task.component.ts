import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task/tasks.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone:false,
})
export class NewTaskComponent {
  @Input() selectedUserId!: string;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';//signal('');
  enteredSummary = '';// signal('');  
  enteredDueDate = '';//signal('');
  private taskService = inject(TaskService);
  onCancel() {
    this.cancel.emit();
  }
  onCreate() {
    this.taskService.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.selectedUserId);
    this.add.emit();
  }
}
