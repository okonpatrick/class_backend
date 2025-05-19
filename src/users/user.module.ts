import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: 'supersecretkey', // ideally use process.env.JWT_SECRET
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
