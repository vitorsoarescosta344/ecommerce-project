import mongoose, { Schema, Document } from "mongoose";
import { OrdersDocument } from "./orders.model";
import { ProductsDocument } from "./products.model";

export interface OrdersDetailDocument extends Document {
  order: OrdersDocument["_id"];
  product_id: ProductsDocument["_id"];
  quantity: number;
}

const ordersDetailSchema = new Schema<OrdersDetailDocument>({
  order: { type: Schema.Types.ObjectId, ref: "categories" },
  product_id: { type: Schema.Types.ObjectId, ref: "products" },
  quantity: { type: Number, required: true },
});

const OrdersDetail = mongoose.model<OrdersDetailDocument>(
  "OrdersDetail",
  ordersDetailSchema
);

export default OrdersDetail;
