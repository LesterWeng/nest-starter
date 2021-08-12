import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string;

  @Column('text')
  password: string;

  @Column()
  status: number;

  @Column()
  createTime: number;

  @Column()
  updateTime: number;

  @BeforeInsert()
  transfromCreateTime() {
    this.updateTime = this.createTime =
      Date.parse(new Date().toString()) / 1000;
  }

  @BeforeUpdate()
  transfromUpdateTime() {
    this.updateTime = Date.parse(new Date().toString()) / 1000;
  }
}
