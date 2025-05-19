import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() body: any) {
    return this.userService.signup(body);
  }

  @Post('login')
  login(@Body() { email, password }: { email: string; password: string }) {
    return this.userService.login(email, password);
  }

  @Get(':id')
  getProfile(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() body: any) {
    return this.userService.updateProfile(id, body);
  }

  @Delete(':id')
  deleteAccount(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
