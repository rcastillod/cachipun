// Variables
var mainWrapper = document.getElementById('mainWrapper') // Main Wrapper

var jugadasTotales = document.getElementById('counterTimes') // Veces a jugar
var jugadasActuales = 0 // Veces que actualmente se ha jugado (Inicialmente 0)

var btnJugar = document.getElementById('jugar') // Botón jugar

var contenedorCantidadUser = document.getElementById('userRes') // Contenedor resultados usuario
var contenedorCantidadMachine = document.getElementById('machineRes') // Contenedor resultados maquina

var userPiedra = document.getElementById('userPiedra') // Imagen usuario piedra
var userPapel = document.getElementById('userPapel') // Imagen usuario papel
var userTijera = document.getElementById('userTijera') // Imagen usuario tijera

var machinePiedra = document.getElementById('machinePiedra') // Imagen maquina piedra
var machinePapel = document.getElementById('machinePapel') // Imagen maquina papel
var machineTijera = document.getElementById('machineTijera') // Imagen maquina tijera

var showTIme = 2500 // Tiempo en que las manos se mostraran

var piedra = 0
var papel = 1
var tijera = 2

var opciones = ['Piedra', 'Papel', 'Tijera'] // 0 = Piedra, 1 = Papel, 2 = Tijera 

// Función para obtener un numero random entre 1 y 3
function randomNumber(){
    var randNumber = Math.floor( Math.random()*3 )
    return randNumber
}

// Función para obtener opción seleccionada por el usuario
function selectedOpt(opcion) {
    var jugadaMachine = randomNumber()

    // Piedra
    if ( opcion == piedra ) {
        
        userPiedra.classList.add('show')
        setTimeout(() => {
            userPiedra.classList.remove('show')
        }, showTIme);

        if ( jugadaMachine == piedra ) {
            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTIme);
            jugadas('empate')
        } else if ( jugadaMachine == papel ) {
            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTIme);
            jugadas('perdiste')
        } else if ( jugadaMachine == tijera ) {
            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTIme);
            jugadas('ganaste')
        }
    }
    // Papel
    if ( opcion == papel ) {

        userPapel.classList.add('show')
        setTimeout(() => {
            userPapel.classList.remove('show')
        }, showTIme);

        if ( jugadaMachine == papel ) {

            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTIme);

            jugadas('empate')

        } else if ( jugadaMachine == piedra ) {
            
            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTIme);

            jugadas('ganaste')

        } else if ( jugadaMachine == tijera ) {

            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTIme);

            jugadas('perdiste')

        }
    }

    // Tijera
    if ( opcion == tijera ) {

        userTijera.classList.add('show')
        setTimeout(() => {
            userTijera.classList.remove('show')
        }, showTIme);

        if ( jugadaMachine == tijera ) {
            
            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTIme);

            jugadas('empate')

        } else if ( jugadaMachine == piedra ) {
            
            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTIme);
            
            jugadas('perdiste')

        } else if ( jugadaMachine == papel ) {
            
            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTIme);

            jugadas('ganaste')

        }
    }
}

// Función para crear cuadros de resultados según la cantidad de jugadas totales ingresadas por el usuario
function jugadas(resultado) {
    
    var cuadrosUser = document.createElement('span')
    var cuadrosMachine = document.createElement('span')
    
    cuadrosUser.classList.add('res-box')
    cuadrosMachine.classList.add('res-box')
    
    var resIconUser = document.createElement('i')
    var resIconMachine = document.createElement('i')

    cuadrosUser.appendChild(resIconUser)
    cuadrosMachine.appendChild(resIconMachine)
    
    contenedorCantidadUser.appendChild(cuadrosUser)
    contenedorCantidadMachine.appendChild(cuadrosMachine)
    
    if ( resultado == 'empate' ) {
        resIconUser.classList.add('fa-solid', 'fa-equals', 'tie')
        resIconMachine.classList.add('fa-solid', 'fa-equals', 'tie')
    } else if ( resultado == 'perdiste' ) {
        resIconUser.classList.add('fa-solid', 'fa-xmark', 'lose')
        resIconMachine.classList.add('fa-solid', 'fa-check', 'win')
    } else if ( resultado == 'ganaste' ) {
        resIconUser.classList.add('fa-solid', 'fa-check', 'win')
        resIconMachine.classList.add('fa-solid', 'fa-xmark', 'lose')
    }
}



// btnJugar.addEventListener('click', () => {
    
//     while ( jugadasActuales < jugadasTotales.value ) {

//         var mensajeJugada = document.createElement('h1')
//         var textoMensaje = mensajeJugada.textContent = 'Selecciona tu siguiente jugada'
//         mainWrapper.appendChild(mensajeJugada)
        
//         jugadas(jugadasTotales)

//         var opcion = opcionSelec()

//         console.log(opcion)

//         jugadasActuales++
//     }
    
// })