const axios = require('axios');


class Busquedas {

    historial = ['madrid', 'san jose', 'nogota'];

    constructor(){

        //leer db si existe
    }


    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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
          // console.log(resp.data.features);
          
            return resp.data.features.map( lugar => ({
                
                id: lugar.id,
                nombre:lugar.place_name,
                lng:lugar.center[0],
                lat:lugar.center[1],


            }));
        
       
        // return []; // regresar resultados
        
    } catch (error) {

        console.log(error);
        return [];
    }


}


}

module.exports = Busquedas ;