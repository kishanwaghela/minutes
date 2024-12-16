import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
        default: ""
    },
    category: [{
        type: mongoose.Schema.ObjectId,
        ref: 'category'
    }],
}, {
    timestamps: true
})

const SubCategorytModel = mongoose.model('product', subCategorySchema)
export default SubCategorytModel
