import mongoose from "mongoose";

// In this way userSchema looks like
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "",
        },
        searchHistory: {
            type: Array,
            default: []
        }
    }
);

export const User = mongoose.model("User", userSchema)
// in db User is convertd into users
// So convention is to use singular and first letter capital
