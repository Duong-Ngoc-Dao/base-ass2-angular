import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const locations = new mongoose.Schema({
    location:{
        type:String,
        require:true
    }, 
    img:{
        type:String
    },
    mess:{
        type:String
    }
    ,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
},
{ timestamps: true, versionKey: false }

)
locations.plugin(mongoosePaginate)
export default mongoose.model("Locations", locations)