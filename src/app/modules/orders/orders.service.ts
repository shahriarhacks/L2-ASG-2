import { Product } from "../bicycle/bicycle.model";
import { IOrder } from "./orders.interface";
import { Order } from "./orders.model";

const create = async (payload: IOrder) => {
   let { email, product: id, quantity, totalPrice } = payload;
   const product = await Product.findById(id);
   if (!product || product.quantity < quantity) {
      throw new Error("Insufficient stock/Product not available");
   }
   totalPrice = product.price * quantity;
   const order = await Order.create({
      email,
      product: id,
      quantity,
      totalPrice,
   });
   product.quantity -= quantity;
   product.inStock = product.quantity > 0;
   await product.save();

   return order;
};

export const OrdersService = { create };
