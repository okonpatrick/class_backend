import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.schema';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async findAll() {
    return this.carModel.find();
  }

  async findByCategory(category: string) {
    return this.carModel.find({ category });
  }
}
