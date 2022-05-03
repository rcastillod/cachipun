// Variables

var jugadasTotales = document.getElementById('counterTimes') // Veces a jugar
var btnJugar = document.getElementById('jugar') // Botón jugar
var contenedorCantidad = document.getElementById('userRes')



btnJugar.addEventListener('click', () => {
    
    for( var $i = 0; $i < jugadasTotales.value; $i++) {
        
        var cuadros = document.createElement('span')
        var checkWin = document.createElement('i')

        cuadros.classList.add('res-box')
        checkWin.classList.add('fa-solid', 'fa-check', 'win')
        
        cuadros.appendChild(checkWin)
        contenedorCantidad.appendChild(cuadros)
    }

})