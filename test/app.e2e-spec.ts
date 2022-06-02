import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';
import { AuthDto } from 'src/auth/dto';
import { EditUserDto } from 'src/user/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);

    await prisma.cleanDb();
    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'eduardo@dev.com',
      password: '123123',
    };

    describe('Signup', () => {
      it('should throw error if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            password: '123123',
          })
          .expectStatus(400);
      });

      it('should throw error if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            email: 'eduardo@eduardo.com',
          })
          .expectStatus(400);
      });

      it('should throw error if body is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({})
          .expectStatus(400);
      });

      it('should sign up', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Signin', () => {
      it('should throw error if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            password: '123123',
          })
          .expectStatus(400);
      });

      it('should throw error if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: 'eduardo@eduardo.com',
          })
          .expectStatus(400);
      });

      it('should throw error if body is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({})
          .expectStatus(400);
      });

      it('should sign in', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
      });
    });
  });

  describe('User', () => {
    describe('Get Current User', () => {
      it('should get current user', () => {
        return pactum
          .spec()
          .get('/users/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
      });
    });

    describe('Edit User', () => {
      it('should edit user', () => {
        const dto: EditUserDto = {
          firstName: 'Edu',
          email: 'edu@edu.com',
        };

        return pactum
          .spec()
          .patch('/users')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.email);
      });
    });
  });

  describe('Bookmarks', () => {
    describe('Create bookmark', () => {});

    describe('Get Bookmarks', () => {});

    describe('Get Bookmark by id', () => {});

    describe('Edit Bookmark', () => {});

    describe('Delete Bookmark', () => {});
  });
});
