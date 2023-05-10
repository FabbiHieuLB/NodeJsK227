const mongoose = require("../../common/database")();
const productSchema = mongoose.Schema({
    thumbnail: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    price: {
        type: Number,
        default: 0,
    },
    cat_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    featured: {
        type: Boolean,
        require: false,
    },
    promotion: {
        type: String,
        require: true,
    },
    warranty: {
        type: String,
        require: true,
    },
    accessories: {
        type: String,
        require: true,
    },
    is_stock: {
        type: Boolean,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
    }
}, {
    timestamps: true,
})

const ProductModel = mongoose.model("Product", productSchema, "products");

module.exports = ProductModel;