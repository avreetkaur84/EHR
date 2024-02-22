const mongoose = require("mongoose");
const patientData = require("./data.js")
const Patients = require("../models/patients.models.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/Ehr";

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Patients.deleteMany({});
    await Patients.insertMany(patientData.data);
    console.log("data was initialized");
};

initDB();