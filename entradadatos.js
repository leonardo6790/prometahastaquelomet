const tarea = () => {
    return new Promise((resolve, reject)=>{

        let tiempo = Math.floor(Math.random()*4000 ) + 1;
        console.log(tiempo);
        if(tiempo > 2000){
            reject("Tiempo agotado");
        }
        setTimeout(() => {
            resolve("Tarea completada");
        }, tiempo); 
    }) ;
}
tarea ().then((resultado,error) => {
    console.log(resultado);
}).catch ((error) => {
    console.error("Error:", error);
}) ;




