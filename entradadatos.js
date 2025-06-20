//EJEMPLO PROFE

// const tarea = () => {
//     return new Promise((resolve, reject)=>{

//         let tiempo = Math.floor(Math.random()*4000 ) + 1;
//         console.log(tiempo);
//         if(tiempo > 2000){
//             reject("Tiempo agotado");
//         }
//         setTimeout(() => {
//             resolve("Tarea completada");
//         }, tiempo); 
//     }) ;
// }
// tarea ().then((resultado,error) => {
//     console.log(resultado);
// }).catch ((error) => {
//     console.error("Error:", error);
// }) ;


//DESCARGA DE ARCHIVO
 
// const descargarArchivo = () =>{
//     return new Promise((resolve, reject) =>{
//         let Archivo = "";
//         const tiempoDescarga = Math.floor(Math.random()*2000) +1;
//     setTimeout(() =>{   
//         if(Archivo == ""){
//             reject("no se pudo descargar el archivo")
//         }  
//         else{
//             resolve("Archivo "+Archivo+" decargado con exito")
//         }
//         }, tiempoDescarga);
//     });
// }
// descargarArchivo().then((resultado,error)=>{
//     console.log(resultado);
// }).catch((error)=>{
//     console.error("Error: ",error)
// });


//NUMERO PAR O IMPAR

// const ParDeHp = () => {
//     return new Promise ((resolve,reject) => {
//         let=NumeroParoImpar = Math.floor(Math.random()*20)+1;
//             if(NumeroParoImpar%2==0){
//                resolve ("Su numero "+NumeroParoImpar+" es par")
//             }
//             else 
//                  reject ("Su numero "+NumeroParoImpar+" es impar")
            
      
//     });
// } 
// ParDeHp().then((resultado,error)=>{
//     console.log(resultado);
// }).catch((error)=>{
// console.log("Error: ",error)
// })
