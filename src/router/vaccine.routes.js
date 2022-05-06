const express = require("express");
const { createPatient } = require("../controller/patient.controller");
const { createVaccine } = require("../controller/vaccine.controller");


const router = express.Router();

// http://localhost:9090/vaccine/creation
router.post("/creation", createVaccine)

// router.post("/creation", createPatient)

// router.get("/welcome",welcomePage)



module.exports = router;