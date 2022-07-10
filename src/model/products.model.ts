import mongoose, { Schema, Document } from "mongoose";
import { CategoriesDocument } from "./categories.model";

export interface ProductsDocument extends Document {
  title: string;
  image: string;
  images: Array<string>;
  description: string;
  price: string;
  quantity: number;
  short_desc: string;
  cat_id: CategoriesDocument["_id"];
}

const productsSchema = new Schema<ProductsDocument>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  images: [{ type: String, required: true }],
  description: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true },
  short_desc: { type: String, required: true },
  cat_id: { type: Schema.Types.ObjectId, ref: "categories" },
});

const Products = mongoose.model<ProductsDocument>("Products", productsSchema);

export default Products;
