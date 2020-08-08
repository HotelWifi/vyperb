const mongoose = require("mongoose");


module.exports = async () => {
        mongoose.connect("mongodb+srv://admin:derp1212@cluster0.8lobg.mongodb.net/VyperBot?retryWrites=true&w=majority", {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }) 
        return mongoose
    }