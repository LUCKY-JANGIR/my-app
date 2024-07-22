const { default: mongoose, model } = require("mongoose");


const restaurantModel = mongoose.Schema({
    name:String
})

export const restaurantschema = mongoose.models.nextcoll || mongoose.model("nextcoll",restaurantModel)