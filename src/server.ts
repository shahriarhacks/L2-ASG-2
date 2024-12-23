import { Server } from "http";
import app from "./app";
import { environment } from "./config/environment";
import { connectMongoDB } from "./connection/mongodb";

let server: Server;

(async function runner() {
   try {
      await connectMongoDB().catch((error) =>
         console.log({ what: `🤦‍♂️ MONGODB Connection Error`, why: error }),
      );
      server = app.listen(environment.port, () => {
         console.log({
            what: `🎉✨ Server Running on PORT: ${environment.port}`,
            where: `http://localhost:${environment.port}`,
         });
      });

      server.on("error", (error) => {
         console.log({
            what: `🤦‍♂️ SERVER failed to start for error`,
            why: error,
         });
         process.exit(1);
      });
   } catch (error) {
      console.log({
         what: `🤦‍♂️ SERVER or DATABASE failed to start with some error!`,
         why: error,
      });
      process.exit(1);
   }
})();
