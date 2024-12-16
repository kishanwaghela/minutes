import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: Array,
        default: []
    },
    category: [{
        type: mongoose.Schema.ObjectId,
        ref: 'category'
    }],
    subCategory: [{
        type: mongoose.Schema.ObjectId,
        ref: 'subCategory'
    }],
    unit: {
        type: String,
    },
    stock: {
        type: Number, default: null
    },
    price: {
        type: Number, default: null
    },
    discount: {
        type: Number, default: null
    },
    description: {
        type: String,
    },
    more_details: {
        type: Object, default: {}
    },
    publish: {
        type: boolean, default: true
    },
}, {
    timestamps: true
})

//create a text index
/* productSchema.index({
    name  : "text",
    description : 'text'
},{
    name : 10,
    description : 5
}) */

const ProductModel = mongoose.model('product', productSchema)
export default ProductModel
