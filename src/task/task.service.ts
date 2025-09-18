import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

   async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  findSampleData() {
    return [
      { id: 1, title: 'Sample Task 1', description: 'This is a sample task', is_completed: false, user: null },
      { id: 2, title: 'Sample Task 2', description: 'This is another sample task', is_completed: true, user: null },
    ];
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find({ relations: ['user'] }); // include user relation
  }

  async findOne(id: number): Promise<Task | null> {
    return this.taskRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, updateTaskDto);
    const updatedTask = await this.taskRepository.findOne({ where: { id }, relations: ['user'] });
    if (!updatedTask) {
      throw new Error(`Task with id ${id} not found`);
    }
    return updatedTask;
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
}
}