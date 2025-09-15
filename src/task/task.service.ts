import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findSampleData() {
    return [
      { id: 1, title: 'Sample Task 1', description: 'This is a sample task', is_completed: false },
      { id: 2, title: 'Sample Task 2', description: 'This is another sample task', is_completed: true },
    ];
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
function findSampleData() {
  throw new Error('Function not implemented.');
}

