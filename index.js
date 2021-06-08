
const { inquirerMenu, 
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {
    
    const busquedas = new Busquedas();

    let opt ;
    
    
    do {

        opt = await inquirerMenu();


        switch(opt) {

            case 1:
                const lugar = await leerInput('Ciudad');
                  await  busquedas.ciudad(lugar);
                
                
                
                
                
                // mostrar mensaje
           // buscar lugares
           //seleccionar lugar
           //clima
           // mostrar resultados
            console.log('Informe del clima');
            console.log('Lat')
            console.log('Long')
            console.log('Temp')
            console.log('minima')
            console.log('maxima')
           
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
