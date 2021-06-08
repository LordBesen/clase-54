const axios = require('axios');


class Busquedas {

    historial = ['madrid', 'san jose', 'nogota'];

    constructor(){

        //leer db si existe
    }


    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiYmVzZW4iLCJhIjoiY2twb202OTN0Mm0wZTJwbXd4N3JrMTl2aCJ9.AZ07E8HaGf0oh2FExaPIqA',
            'limit': 5,
            'Language': 'es'
        }

    }

    async ciudad(lugar = '') {

        try{

            const instance = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json `,
                params: this.paramsMapbox,

            });
            const resp = await instance.get();
        
       
        console.log(resp.data);
        return []; // regresar resultados
    } catch (error) {

        console.log(error);
        return [];
    }


}


}

module.exports = Busquedas ;