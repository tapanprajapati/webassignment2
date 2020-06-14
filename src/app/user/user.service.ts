import { Injectable } from '@angular/core';
import { USER } from '@app/mock-data';
import { User } from '@app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(): User {
    return USER;
  }
}
