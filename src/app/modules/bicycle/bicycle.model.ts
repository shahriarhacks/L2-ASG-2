import { Schema, model } from "mongoose";
import { IBiCycle } from "./bicycle.interface";

const bicycleType = ["Mountain", "Road", "Hybrid", "BMX", "Electric"];

const bicycleSchema = new Schema<IBiCycle>(
   {
      name: {
         type: String,
         required: [true, "You must need to provide a Bicycle name."],
         trim: true,
         minlength: 1,
      },
      brand: {
         type: String,
         required: [
            true,
            "You must need to provide a Bicycle Company/Brand name.",
         ],
         trim: true,
         minlength: 1,
      },
      price: {
         type: Number,
         required: [true, "Bicycle price must be required and positive!"],
         min: 1,
      },
      type: {
         type: String,
         enum: {
            values: bicycleType,
            message: "{VALUE} aren't available in type",
         },
         required: true,
      },
      description: {
         type: String,
         required: [
            true,
            "You must need to provide a single description about your cycle!.",
         ],
         trim: true,
         minlength: 10,
      },
      quantity: {
         type: Number,
         required: [true, "Quantity must need provide and positive!"],
         min: [0, "Quantity cannot be negative."],
      },
      inStock: {
         type: Boolean,
         //  required: true, I handle it on my pre middleware
      },
   },
   { timestamps: true, versionKey: false },
);

// eslint-disable-next-line consistent-return
bicycleSchema.pre("save", function (next) {
   // eslint-disable-next-line @typescript-eslint/no-this-alias
   const bicycle = this;
   if (bicycle.quantity < 0) {
      return next(new Error("Quantity cannot be negative!"));
   }
   bicycle.inStock = bicycle.quantity > 0;
   next();
});

export const Product = model<IBiCycle>("Product", bicycleSchema);
