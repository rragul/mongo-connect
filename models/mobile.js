const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    name : String,
    price: String,
    img : String
});

const Mobile = mongoose.model("Mobile", MobileSchema);

module.exports = Mobile;