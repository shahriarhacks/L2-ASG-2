import mongoose from "mongoose";

export interface IOrder {
   email: string;
   product: mongoose.Types.ObjectId;
   quantity: number;
   totalPrice?: number;
}
