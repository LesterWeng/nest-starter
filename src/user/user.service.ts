import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly appRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const data = await this.appRepository.create(dto);

    return await this.appRepository.save(data);
  }

  async read(id: number): Promise<User> {
    return await this.appRepository.findOne(id);
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.appRepository.findOne(id);
    const data = await this.appRepository.create(dto);
    Object.assign(user, data);

    return await this.appRepository.save(user);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.appRepository.delete(id);
  }
}
