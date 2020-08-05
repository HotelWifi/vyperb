const mongoose = require("mongoose");


module.exports = {
    init: () => {
        mongoose.connect("mongodb+srv://admin:derp1212@cluster0.8lobg.mongodb.net/VyperBot", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

        mongoose.connection.on("connected", () => {
            console.log("Mongoose has successfully connected!");
        });

        mongoose.connection.on("err", err => {
            console.error(`Mongoose connection error: \n${err.stack}`);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("Mongoose connection lost");
        });
    }
}
