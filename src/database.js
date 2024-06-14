import mongoose from "mongoose";
import config from "./config";
(async () => {
    try{ 
    const db = mongoose.connect(config.mongodbURL)
    console.log("database is connected to: ", (await db).connection.name);
    } catch (error) { 
        console.error(error);
    }
})();
