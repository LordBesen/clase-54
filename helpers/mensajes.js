

require('colors');


const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('============================')
        console.log('=== Seleccione una opcion ==')
        console.log('============================')
       
        
    const readline = require('readline').createInterface({
        input: process.stdin,
        output:process.stdout
    
    });
    
    
        readline.question('Seleccione una opcion  ', (opt) => {
    
            
            readline.close();
            resolve(opt);
            
        })
    

    });

       






    }

    

 
    const pausa = () => {

        return new Promise(resolve => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        
        });
        readline.question('Presione ENTER para continuar  ', (opt) => {
    
            
            readline.close();
            resolve();
        })
        
    })
           
    
       
        
    }
    





module.exports = {

    mostrarMenu,
    pausa
}