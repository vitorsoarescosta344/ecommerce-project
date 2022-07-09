import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends Document {
  username: string;
  password: string;
  email: string;
  fname: string;
  lname: string;
  age: number;
  role: number;
  photoUrl: string;
  type: string;
}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number, required: true },
  role: { type: Number, required: true },
  photoUrl: { type: String, required: true },
  type: { type: String, required: true },
});

userSchema.pre("save", async function (next: any) {
  let user = this as UserDocument;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

  const hash = await bcrypt.hashSync(user.password, salt);

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
