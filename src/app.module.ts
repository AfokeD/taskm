import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task/task.service';
import { User } from './user/entities/user.entity';
import { Task } from './task/entities/task.entity';

@Module({
  imports: [UserModule, TaskModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'afoke',
      database: 'taskassigner',
      entities: [User, Task],  //register the entities here
      synchronize: true,       //auto create database tables based on entities
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

