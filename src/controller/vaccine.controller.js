const VaccineModel = require("../model/vaccine.model")


const getVaccine= (req, res) => {
    res.render("vaccine")
}



            


const createVaccine = async (req, res ) => {
    try{
        const { name } = req.body;
const patientName = await VaccineModel.findOne({name})
        if(!patientName){
            const newVaccine = new VaccineModel(req.body);
            const createdVaccine= await newVaccine.save();
            
            // console.log("new patient record -> ",newPatient);
            // console.log("request body -> ",req.body);
            // console.log("paient created -> ",createdPatient);
        // return res.send(createdPatient)
      
        
        return res.render("welcome",{
            name : name ,
            message : "Your details are added successfully"
        })
    }
    else {
        return res.render("vaccine",{
            name : name
        })
    }
   
    }catch(err){
        return res.send(err)
    }
}


module.exports = { createVaccine }