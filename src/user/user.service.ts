import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { users } from './entities/user.entity';
import { CreateDto } from './dto/create.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(users)
    private readonly UsersRepository: Repository<users>,
  ){}

  //метод поиска одного пользователя
  async findOne(id: string): Promise<users> {
    return await this.UsersRepository.findOne(id);
  }
  //метод создания пользователя
  async create(CreateDto: CreateDto): Promise<users>{
    return await this.UsersRepository.save(CreateDto);
  }
}
