import { Component, Input, Output,EventEmitter } from '@angular/core';
import { task } from './task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone:false,
})
export class TaskComponent {
  @Input() id!: string;
  @Input({required:true}) task!: task;
  @Output() complete = new EventEmitter();
  onCompletedTask(){
    this.complete.emit(this.task);
  }
}
