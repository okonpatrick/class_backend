import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
