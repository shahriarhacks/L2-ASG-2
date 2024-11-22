import { IBiCycle } from "./bicycle.interface";
import { Product } from "./bicycle.model";

const create = async (payload: IBiCycle): Promise<IBiCycle> => {
   const result = await Product.create(payload);
   return result;
};

const readAll = async (searchTerm: string | undefined): Promise<IBiCycle[]> => {
   const result = await Product.find(
      searchTerm
         ? {
              $or: [
                 { name: searchTerm },
                 { brand: searchTerm },
                 { type: searchTerm },
              ],
           }
         : {},
   );
   return result;
};

export const BicycleService = {
   create,
   readAll,
};
