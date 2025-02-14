import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // a exclamação garante que o banco de dados vai dar um valor de id (fica como papel do BD)

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;
}
