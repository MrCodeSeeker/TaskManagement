import { Injectable } from "@angular/core";
import { NewTaskData } from "./task.model";
@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ];
    getUserTasks(userId:string) {
        return this.tasks.filter((task) => task.userId === userId);
    }
    addTasks(newTask: NewTaskData, userid: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userid,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate
        });
    }
    onCompleteTasks(userId: string, taskId: string) {
        return this.tasks=this.tasks.filter((task) =>task.id !== taskId);// && task.userId !== userId);
        }
    deleteTasks(taskId: string) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }

}