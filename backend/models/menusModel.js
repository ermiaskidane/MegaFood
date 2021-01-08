import mongoose from "mongoose"

const MenuSchema = mongoose.Schema(
    {
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

const Menu = mongoose.model("Menu", MenuSchema)

export default Menu
