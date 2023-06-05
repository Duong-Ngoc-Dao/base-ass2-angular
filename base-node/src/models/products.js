import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    }, 
    img: {
        type: String,
    },
    mess: {
        type: String,
    },
});

export default mongoose.model("Product", productSchema)  