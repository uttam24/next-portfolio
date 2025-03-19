import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true,
    },
});

export const Portfolio = mongoose.models.contacts || mongoose.model('contacts', contactFormSchema);


