import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const _env = {
   env: process.env.NODE_ENV,
   port: process.env.PORT,
   mongo_uri: process.env.DB_URI_MONGO,
};

export const environment = Object.freeze(_env);
