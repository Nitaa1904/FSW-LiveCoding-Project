const express = require("express");
const morgan = require("morgan");
const { Students } = require("./models")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.post("/api/v1/student", async (req, res) => { //handler
    const newStudent = req.body

    try {
    await Students.create(newStudent);
        res.status(200).json ({
            status: "Success",
            message: "Application passes healtchceck",
            isSuccess: true
        })
    } catch(error) {
        res.status(500).json ({
            status: "Failed",
            message: error.message,
            isSuccess: false
        })
    }
})

app.get("/api/v1/students", async (req, res) => {
    try {
    const students = await Students.findAll();
        res.status(200).json({
            status: "Success",
            message: "Application passed healtcheck",
            isSuccess: true,
            data: {
                students
            }
        })
    } catch(error) {
        res.status(500).json({
            status: "Fail",
            message: error.message,
            isSuccess: false
        })
    }
})

app.get("/api/v1/health-check", async (req, res) => { //handler
    try {
        res.status(200).json ({
            status: "Success",
            message: "Application passes healtchceck",
            isSuccess: true
        })
    } catch(error) {
        res.status(500).json ({
            status: "Failed",
            message: "Application fail pass healtchceck",
            isSuccess: false
        })
    }
})

module.exports = app;