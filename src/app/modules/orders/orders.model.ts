import mongoose, { Schema } from "mongoose";
import { IOrder } from "./orders.interface";

const orderSchema = new Schema<IOrder>(
   {
      // eslint-disable-next-line no-useless-escape
      email: { type: String, required: true, match: /.+\@.+\..+/ },
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, min: 1 },
      totalPrice: { type: Number, required: true, min: 0 },
   },
   { timestamps: true },
);

export const Order = mongoose.model<IOrder>("Order", orderSchema);
