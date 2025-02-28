import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import {
  CreateUserService,
  FindOneUserService,
  FindAllUsersService,
  UpdateUserService,
  DeleteUserService,
} from './services';
import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [UserController],
  providers: [
    CreateUserService,
    FindOneUserService,
    FindAllUsersService,
    UpdateUserService,
    DeleteUserService,
  ],
})
export class UserModule {}
