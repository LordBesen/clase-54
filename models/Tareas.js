const Tarea = require('./Tarea');

class Tareas {

    _listado = {


    };


    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
           // console.log(key);
        });

        return listado;
    }


    constructor() {


        this._listado = {};
    }

    borrarTarea (id = '') {

        if (this._listado(id)) {
            delete this._listado(id);
        }
    }

    cargarTareasFromArray( tareas = []){

        tareas.forEach( tarea => {

            this._listado(tarea.id) = tarea;
        });

    }


    crearTarea(desc = '') {

       const tarea = new Tarea(desc);
       this._listado[tarea.id] = tarea;


    }

    listadoCompleto()  {
       this.listadoArr.forEach((tarea,i)=>{
       
       const idx = i +1;
       const {desc, completadoEn} = tarea;
       const estado = (completadoEn) 
                            ? 'Completada'
                            : 'Pendiente'
       
        console.log(`${idx} ${desc} ${estado}`);


       });
      

    }


    listarCompletadas()  {
        this.listadoArr.forEach((tarea,i)=>{
        
        const idx = i +1;
        const {desc, completadoEn} = tarea;
        const estado = (completadoEn) 
                             ? console.log(`${idx} ${desc} ${completadoEn}`)
                             : 'Pendiente'
        
         
 
 
        });
       
 
     }
 
     


    

    listarPendientes()  {
        this.listadoArr.forEach((tarea,i)=>{
       
            const idx = i +1;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) 
             if (completadoEn){

                console.log('')
             }  else {
                
                console.log(`${idx} ${desc} ${'Pendiente'}`);
             }                                                                   

                            
            
             
     
     
            });
           
     
         }
     
         
 
     


    


}


    





module.exports = Tareas;
