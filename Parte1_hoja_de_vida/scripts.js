// Alan david zea marin
//se adiciona in "event listener" para cuando se cargue todo el contenido
// de la pagina

document.addEventListener("DOMContentLoaded", () => {  

    //se obtiene referencia a las lista dinamica:
    const taskList = document.getElementById("taskList");

    // referencia al elemento seleccionado de la lista:
    let selectedTask = null;

    // se adiciona event listener a cada boton: 

    document.getElementById ("addTask").addEventListener("click", ()=>{
        const textoTarea = prompt("Ingrese el nombre de la tarea:");
        if(textoTarea){

            //crea un nuevo elemento HTML de tipo "li":
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent=textoTarea;
            taskList.appendChild(nuevaTarea);
            //se le adiciona el handler de deleccion a la nueva tarea creada:
            selectedTaskHandler(nuevaTarea);
        }
    });

    document.getElementById ("deleteTask").addEventListener( "click", ()=> {
        if(selectedTask)
            {
                taskList.removeChild(selectedTask);
                selectedTask=null;
        }
        else{
            alert("no ha  ninguna tarea");
        }
    });

    document.getElementById ("editTask").addEventListener( "click", ()=>{
        if(selectedTask)
        {
            const nuevoTexto = prompt("Modificar la tarea ", selectedTask.textContent);
            if(nuevoTexto)
                {
                selectedTask.textContent=nuevoTexto;                        
            }

        }
        else {
            alert("seleccione una tarea para modificar");
        }
    });

    function selectedTaskHandler(task)
    {
        task.addEventListener("click",() => {
            selectedTask = task;
        });
    }

}   );

//se adiciona in "event listener" para cuando se cargue todo el contenido
// de la pagina

document.addEventListener("DOMContentLoaded", () => {  

    //se obtiene referencia a las lista dinamica:
    const taskList = document.getElementById("eduList");

    // referencia al elemento seleccionado de la lista:
    let selectedTask = null;

    // se adiciona event listener a cada boton: 

    document.getElementById ("addedu").addEventListener("click", ()=>{
        const textoTarea = prompt("Ingrese el nombre de la tarea:");
        if(textoTarea){

            //crea un nuevo elemento HTML de tipo "li":
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent=textoTarea;
            taskList.appendChild(nuevaTarea);
            //se le adiciona el handler de deleccion a la nueva tarea creada:
            selectedTaskHandler(nuevaTarea);
        }
    });

    document.getElementById ("deleteedu").addEventListener( "click", ()=> {
        if(selectedTask)
            {
                taskList.removeChild(selectedTask);
                selectedTask=null;
        }
        else{
            alert("no ha  ninguna tarea");
        }
    });

    document.getElementById ("editedu").addEventListener( "click", ()=>{
        if(selectedTask)
        {
            const nuevoTexto = prompt("Modificar la tarea ", selectedTask.textContent);
            if(nuevoTexto)
                {
                selectedTask.textContent=nuevoTexto;                        
            }

        }
        else {
            alert("seleccione una tarea para modificar");
        }
    });

    function selectedTaskHandler(task)
    {
        task.addEventListener("click",() => {
            selectedTask = task;
        });
    }

}   );