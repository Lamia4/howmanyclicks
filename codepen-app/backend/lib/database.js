import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();

mongoose.connect(

    process.env.MongoDb_Url, {

        useNewUrlParser: true,
		useUnifiedTopology: true,
		// useFindAndModify: false,
		// useCreateIndex: true,
		// auth: { authSource: "admin" }

    }
)

const init = function () {

    const db = mongoose.connection;
    db.on("error", console.error);
}

export default {init};