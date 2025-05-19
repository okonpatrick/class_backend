// server/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './users/user.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://okonpatrick:08025633547,Pato@cluster0.fsjhvrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
