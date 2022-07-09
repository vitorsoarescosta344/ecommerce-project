import mongoose, { Schema, Document } from "mongoose";
import { UserDocument } from "./users.model";

export interface AddressDocument extends Document {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  cep: string;
  user: UserDocument["_id"];
}

const addressSchema = new Schema<AddressDocument>({
  line1: { type: String, required: true },
  line2: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  cep: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "Users" },
});

const Address = mongoose.model<AddressDocument>("Addresses", addressSchema);

export default Address;
