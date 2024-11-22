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

const readSingle = async (id: string): Promise<IBiCycle | null> => {
   const result = await Product.findById(id);
   return result;
};

const update = async (
   id: string,
   payload: Partial<IBiCycle>,
): Promise<IBiCycle | null> => {
   const result = await Product.findOneAndUpdate({ _id: id }, payload, {
      new: true,
   });
   if (result && result?.quantity <= 0) {
      result.inStock = false;
      result.quantity = 0;
   }
   await result?.save();
   return result;
};

export const BicycleService = {
   create,
   readAll,
   readSingle,
   update,
};
