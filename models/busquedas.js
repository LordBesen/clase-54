const axios = require('axios');


class Busquedas {

    historial = ['madrid', 'san jose', 'nogota'];

    constructor(){

        //leer db si existe
    }

    async ciudad(lugar = '') {

        try{
        
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data);
        return []; // regresar resultados
    } catch (error) {

        console.log(error);
        return [];
    }


}

}

module.exports = Busquedas ;