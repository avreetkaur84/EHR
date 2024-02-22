const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Patients = require("./models/patients.models.js")
var cors = require('cors')

app.use(express.json());
app.use(cors());

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

app.get("/", (req, res) => {
    res.send("Hi, I am Root!!");
})


app.post("/login", cors(), async (req, res) => {
    const { username, password } = req.body;
    try {
        const patient = await Patients.findOne({ username, password });
        if (patient) {
            res.json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid username or password" });
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});



app.listen(3000, () => {
    console.log("Server is listening to port 3000");
    // res.send("Root is working");    
})