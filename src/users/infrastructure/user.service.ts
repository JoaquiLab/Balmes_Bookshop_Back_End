import { Injectable, Logger } from '@nestjs/common';
import { UserI } from '../interfaces/user-interface';
import { User } from '../models/user_model';

@Injectable({})
export class UserService {
  logger = new Logger('[USER_SERVICE]');

  public createNewUser(userToCreate: User): User | null {
    // TODO:check if the users already exists
    // TODO:check if the user data is correct
    // call backend function to create the user
    // all must be done in a try catch
    try {
      const newUser = new User(
        userToCreate.name,
        userToCreate._email,
        userToCreate._password,
      );
      // return the new user
      return newUser;
    } catch (error) {
      this.logger.error('The user could not be created');
      return null;
    }
  }

  public set deleteUser(userIdToDelete: string): void {
    // TODO: check if the user exists
    // TODO: access tothe database
    // TODO: filter by the id
    // TODO: delete the user
  }

  public set modifyUser(userId: string, paramToModify: string) {
    // TODO: check if the user exists
    // TODO: if not exists return an error
    // TODO: if the user exists, check if the param exists in the model
    // TODO: if the param not exists return an error
    // TODO: if the param exists call function to accessthe database and modify
  }

  public get userExists(userId): boolean {
    // TODO: call to internal function to check if the user exists
    return false;
  }
}
