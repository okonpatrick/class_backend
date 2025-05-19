// server/car/car.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get('category/:category')
  getCarsByCategory(@Param('category') category: string) {
    return this.carService.findByCategory(category);
  }
}
