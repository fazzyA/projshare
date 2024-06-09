const mongoose = require("mongoose")

async function dbconnect() {
    // database connection
    mongoose.connect("mongodb+srv://faz123:faz123@cluster0.yhego.mongodb.net/projectshare")
    // mongoose.connect("mongodb://localhost:27017")
}
module.exports = dbconnect