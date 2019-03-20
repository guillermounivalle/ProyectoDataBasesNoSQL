const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cancer_Articulos_Schema = Schema({
   "Authors": String,
   "Author(s) ID": String,
   "Title": String,
   "Year": Number,
   "Source title": String,
   "Cited by": String,
   "DOI": String,
   "Link":String,
   "Abstract":String,
   "PublicationStage":String,
   "Access_Type": String,
   "EID":String
   
});


module.exports = mongoose.model('cancer_articulos', Cancer_Articulos_Schema);

