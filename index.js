require('dotenv').config();


const { inquirerMenu, 
        pausa,
        leerInput,
        listarLugares,
        confirmar,
        mostrarListadoChecklist
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');
//console.log(process.env.MAPBOX_KEY);

const main = async() => {
    
    const busquedas = new Busquedas();

    let opt ;
    
    
    do {

        opt = await inquirerMenu();


        switch(opt) {

            case 1:
                const termino = await leerInput('Ciudad');
                 const lugares = await  busquedas.ciudad(termino);
                 const id = await listarLugares(lugares);
                 const lugarSel = lugares.find(l => l.id === id)
                 console.log(lugarSel);
                
                
                
                
                
                // mostrar mensaje
           // buscar lugares
           //seleccionar lugar
           //clima
           // mostrar resultados
            console.log('Informe del clima');
            console.log('Ciudad', lugarSel.nombre);
            console.log('Lat', lugarSel.lat);
            console.log('Long', lugarSel.lng);
            console.log('Temp');
            console.log('minima');
            console.log('maxima');
           
                break;

            case 2:
                break;

            case 3: 
            break;


        }
        
        if (opt !== 0) await pausa();


    } while (opt !== 0)
    


}     

main();
