import { CreateDto } from './dto/create.dto';
import { Controller, Get, Param, Post, Body, Res, NotFoundException, HttpStatus } from '@nestjs/common';

import { UserService } from './user.service';
import { users } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService){}
  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string): Promise<users>{
    const response = await this.UserService.findOne(id);
    if (!response) throw new NotFoundException('Такого пользователя не существует!')
    return res.status(HttpStatus.OK).json(response)
  }

  @Post()
  async create(@Res() res, @Body() CreateDto: CreateDto) {
    const createUser = await this.UserService.create(CreateDto);
      return res.status(HttpStatus.OK).json({
        message: "Пользователь успешно добавлен!",
        name: createUser.name
      })
  }
}
