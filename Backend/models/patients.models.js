const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    location: [
        {
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
            },
        }
    ],
    disease: [
        {
            diseaseName: {
                type: String,
                required: true,
            },
            diseaseSeverity: {
                type: String,
                required: true,
                enum: ["minor", "moderate", "major", "extreme"],
                default: "minor",
            },
        }
    ],
    income: {
        type: Number,
        required: true,
    },
    contact: [
        {
            phoneNo: {
                type: String,
            },
            email: {
                type: String,
                required: true,
                lowercase: true,
                trim: true,
            },
        }
    ],
    Gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"],
        default: "Male",
    },
    occupation: {
        type: String,
    },
    insurance: [
        {
            coverage_limit: {
                type: Number,
            },
            remaining_balance: {
                type: Number,
            },
            coverage_percentage: {
                type: Number,
            },
        }
    ],
    password: {
        type: String,
        required: [true, "Password is required"],
    },
}, {timestamps: true});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;