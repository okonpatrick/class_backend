// server/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}

  async signup(data: { email: string; password: string; name: string }) {
    const hashedPassword = await argon2.hash(data.password);
    const user = new this.userModel({ ...data, password: hashedPassword });
    return user.save();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user || !(await argon2.verify(user.password, password))) {
      throw new NotFoundException('Invalid credentials');
    }
    const payload = { sub: user._id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return { user, token };
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async updateProfile(id: string, data: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async findAll() {
    return this.userModel.find();
  }
}
