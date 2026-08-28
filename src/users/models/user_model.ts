import { get } from 'http';

//Entity USER
export class User {

  _name: string;
  _email: string;
  _password: string;
  constructor(name: string, email: string, password: string) {
    ((this._name = name), (this._email = email), (this._password = password));
  }
  
  //   Getters
  public get name(): string {
    return this.name;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  //   Setters

  public set name(name: string) {
    this._name = name;
  }

  public set email(email: string) {
    this._email = email;
  }

  public set password(password: string) {
    this._password = password;
  }
}
