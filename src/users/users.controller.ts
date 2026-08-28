import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import type { User } from './interfaces/user-interface'

/**
 * Business logic of the USERS entity
 */
@Controller('users')
export class UsersController {
  datababase: User[] = [
    {
      id: '1',
      email: 'test@test.com',
      password: '123456',
      token: 'fake-jwt-token-123',
    },
    {
      id: '2',
      email: 'tasfiaAli@beatiful.com',
      password: 'arabe',
      token: 'fake-jwt-token-tasfi',
    },
  ];

  @Get()
  getOneUser(@Query('userId') userId: number): User {
    const paramUserId: string = userId.toString();
    const user: User | undefined = this.datababase.find(
      (array) => array.id === paramUserId,
    );
    if (!user) {
      throw new NotFoundException(`User not exists ${userId}`);
    }
    return user;
  }
}
