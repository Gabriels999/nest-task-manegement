import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  helloWorld() {
    return 'Hello World!';
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
