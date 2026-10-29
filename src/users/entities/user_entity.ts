import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  USER = 'USER',
  VENDOR = 'VENDOR',
  ADMIN = 'ADMIN',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ name: 'full_name', type: 'varchar', length: 100 })
  nama_lengkap: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ name: 'password_hash', type: 'text', select: false })
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    enumName: 'users_role_enum',
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
