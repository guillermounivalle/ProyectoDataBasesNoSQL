//Schema cancer_articulos
const mongodb = require('../driverNoSQL')
const Cancer_Articulos = require ('../Models/cancerArticulos');


function getArticulos(req, res) {
  mongodb.mongoConnection();
  Cancer_Articulos.find({}, (err, articulos) => {
    if (err) {
      console.log(`Error al realizar petición: ${err}`);
      mongodb.mongoClose();
      return res.status(500).send({message: `Error al realizar petición: ${err}`});
      
    }
    if (!articulos) {
      console.log('No existen Articulos');
      mongodb.mongoClose();
      return res.status(404).send({message:`No existen productos` });      
    } else {
      mongodb.mongoClose();
      res.status(200).send({articulos});
    }
    mongodb.mongoClose();
  }); 
}

function getArticulosPorId(req, res) {
  mongodb.mongoConnection();
  let PubMed_ID = req.params.PubMed_ID;
  Cancer_Articulos.findById(PubMed_ID, (err, articulos)=>{
    if(err) {
      console.log(`Error al realizar petición: ${err}`);
      mongodb.mongoClose();
      return res.status(500).send({message: `Error al realizar petición: ${err}`});
    }
    if(!articulos) {
      console.log('No existen Articulos');
      mongodb.mongoClose();
      return res.status(404).send({message:`El articulo no existe` });
    }else{
      res.status(200).send({articulos: articulos});
      mongodb.mongoClose();
    }
  })  
}

module.exports = {
  Cancer_Articulos: Cancer_Articulos,
  getArticulos,
  getArticulosPorId
};