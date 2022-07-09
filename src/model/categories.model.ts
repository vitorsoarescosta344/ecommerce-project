import mongoose, { Schema, Document } from "mongoose";

export interface CategoriesDocument extends Document {
  title: string;
}

const categoriesSchema = new Schema<CategoriesDocument>({
  title: { type: String, required: true },
});

const Categories = mongoose.model<CategoriesDocument>(
  "Categories",
  categoriesSchema
);

export default Categories;
