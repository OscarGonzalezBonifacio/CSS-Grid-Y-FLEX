/*la forma de esperar un evento*/
document.addEventListener('DOMContentLoaded', function() {
    /*llamando la funcion */
    cargarPortafolio();
});


function cargarPortafolio() {
    /*utilizamos fech*/ 
   fetch('datos.json')
   .then(function(respuesta) {
       return respuesta.json();
   })
   /*aqui ya hay acceso alos datos*/
   .then(function(datos) {
       /*variable vacia*/
       let html = ''
       /*ya se tiene acceso alos elementos del portafolio
       foreach da acceso acada elemnto de forma individual 
       recoorrelos elementos*/
       datos.portafolio.forEach( portafolio => {
           // crear el template
           /* pprtafolio.id */
           html += `   
               <div class="elemento">
               
                   <img src="img/${portafolio.id}.jpg">
                   <div class="contenido">
                       <h3>${portafolio.nombre}</h3>
                       <p>${portafolio.desc}</p>
                   </div>
               </div>
           `;            
       });
       // despues de recorrer, lo inyectamos
       document.querySelector('#listado').innerHTML = html;
   })
   .catch(function(error) {
       console.log(error);
   });
}