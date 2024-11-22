import { IBiCycle } from "./bicycle.interface";
import { Product } from "./bicycle.model";

const create = async (payload: IBiCycle): Promise<IBiCycle> => {
   const result = await Product.create(payload);
   return result;
};

export const BicycleService = {
   create,
};
