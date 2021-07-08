/* seleciona documentos del HTMl queyselector */
const menuIzquierdo = document.querySelector('.menu-izquierdo');
/*comparamos */
menuIzquierdo.addEventListener('click', (e)  => {
       const claseMenu = e.target.classList;
       
       // Selecciona el contenedor, selecionamos variables
       const contenedor = document.querySelector('.pagina'),
             flechaIzq = document.querySelector('.fa-arrow-left'),
             flechaDer = document.querySelector('.fa-arrow-right');

       if(claseMenu.contains('fa-arrow-left') ) {
            // aqui agregamos la clase no-menu
            contenedor.classList.add('no-menu');
            e.target.style.display = 'none';
            flechaDer.style.display = 'block';
       } else if( claseMenu.contains('fa-arrow-right')) {
            contenedor.classList.remove('no-menu');
            e.target.style.display = 'none';
            flechaIzq.style.display = 'block';
       }
});

