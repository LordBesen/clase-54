const axios = require('axios');


class Busquedas {

    historial = ['madrid', 'san jose', 'nogota'];

    constructor(){

        //leer db si existe
    }

    async ciudad(lugar = '') {

        try{
        
        const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/ottawa.json?access_token=pk.eyJ1IjoiYmVzZW4iLCJhIjoiY2twb202OTN0Mm0wZTJwbXd4N3JrMTl2aCJ9.AZ07E8HaGf0oh2FExaPIqA&limit=5&language=es');
        console.log(resp.data);
        return []; // regresar resultados
    } catch (error) {

        console.log(error);
        return [];
    }


}

}

module.exports = Busquedas ;