import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'Hello world, I am signed up!' };
  }

  signin() {
    return { message: 'Hello world, I am signed in!' };
  }
}
