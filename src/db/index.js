const { connect } = require("mongoose");

const uri = "mongodb+srv://Manasa:vLMlQDsMTeITaV09@cluster0.aw4di.mongodb.net/brillio-db?retryWrites=true&w=majority";

connect(uri)
  .then(() => console.log("MongoDB Connected!!!"))
  .catch(err => console.log(err));
