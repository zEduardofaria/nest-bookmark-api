import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { message: 'Hello world, I am signed up!' };
  }

  signin() {
    return { message: 'Hello world, I am signed in!' };
  }
}
