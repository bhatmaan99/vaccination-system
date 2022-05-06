const { Schema, model } = require("mongoose");

const vaccineSchema =new Schema({
    name : {
        type : Schema.Types.String,
        required : true,
        unique : true
    },
    DateOfBirth : {
        type : Schema.Types.Date,
        required : true
    },
    Dose : {
        type : Schema.Types.String,
        required : true
    },
    Brand : {
        type : Schema.Types.String,
        required : true
    },
    Vaccinated_at : {
        type : Schema.Types.String,
        required : true
    },
    
},{
    versionKey : false
})

const VaccineModel = model("Vaccine", vaccineSchema)

module.exports = VaccineModel;

