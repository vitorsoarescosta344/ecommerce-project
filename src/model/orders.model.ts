import mongoose, { Schema, Document } from "mongoose";
import { UserDocument } from "./users.model";

export interface OrdersDocument extends Document {
  user: UserDocument["_id"];
}

const ordersSchema = new Schema<OrdersDocument>({
  user: { type: Schema.Types.ObjectId, ref: "Users" },
});

const Orders = mongoose.model<OrdersDocument>("Orders", ordersSchema);

export default Orders;
