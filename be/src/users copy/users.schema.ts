import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { randomBytes } from 'crypto';
import { Role } from 'src/utils/enums/role.enum';
import { Url, UrlObject } from 'url';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  avatar: string;

  @Prop({ default: Role.User })
  role: Role;
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.virtual('id').get(function () {
  return this['_id'].toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
  virtuals: true,
});
export { UserSchema };
