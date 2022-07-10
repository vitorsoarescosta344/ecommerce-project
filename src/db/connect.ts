import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const uri = config.get("uridb") as string;

  return mongoose
    .connect(uri)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("Mongo connection error", error);
      process.exit(1);
    });
}

export default connect;
