import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
  password: string;
  //Relationship: One user has many tasks}
  @OneToMany(() => Task, tasks => tasks.user)
  tasks: Task[];
}
