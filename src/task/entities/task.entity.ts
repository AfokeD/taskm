import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('tasks')
export class Task {
    @PrimaryColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    is_completed: boolean;
      // Relationship: Many tasks belong to one user
  @ManyToOne(() => User, user => user.tasks, { onDelete: 'CASCADE' })
  user: User;

}

