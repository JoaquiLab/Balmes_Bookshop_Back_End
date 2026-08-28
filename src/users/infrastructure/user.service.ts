import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user-interface';

@Injectable({})
export class UserService {
  
  public set User(userToCreate: User): User | null {
    // check if the users already exists
    // check if the user data is correct
    // call backend function to create the user
    // return the new user
    // all must be done in a try catch
    throw new InternalServerErrorException();
  }
  
  public set delete(userIdToDelete : string): void {
    // check if the user exists
    // access tothe database
    // filter by the id
    // delete the user  
  }
  
  public set modifyUser(userId : string, paramToModify: string) {
    //check if the user exists
    //if not exists return an error
    //if the user exists, check if the param exists in the model
    // if the param not exists return an error
    // if the param exists call function to accessthe database and modify
  }
  
  public get userExists(userId) : boolean {
    // call to internal function to check if the user exists
    return false 
  }

  
}
  
  
