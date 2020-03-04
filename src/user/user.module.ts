import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { users } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
