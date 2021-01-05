import mongoose from "mongoose"

const ShopMenuSchema = mongoose.Schema(
    {
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: "User"
        // },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        oldPrice: {
            type: Number,
            default: 0,
        },
        offer: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

const ShopMenu = mongoose.model("ShopMenu", ShopMenuSchema)

export default ShopMenu
