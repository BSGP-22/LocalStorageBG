localStorage.setItem('nombre', 'Juan');




const producto = {
    nombre: 'Monitor 24"',
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);



 const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));
