import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/hello')
  firstMethod() {
    return this.tasksService.helloWorld();
  }

  @Get('')
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
