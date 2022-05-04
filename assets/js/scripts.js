// Variables
var mainWrapper = document.getElementById('mainWrapper') // Main Wrapper

var jugadasTotales = document.getElementById('counterTimes').value // Veces a jugar
var jugadasActuales = 1 // Veces que actualmente se ha jugado (Inicialmente 0)

var btnJugar = document.getElementById('jugar') // Botón jugar

var contenedorCantidadUser = document.getElementById('userRes') // Contenedor resultados usuario
var contenedorCantidadMachine = document.getElementById('machineRes') // Contenedor resultados maquina

var userPiedra = document.getElementById('userPiedra') // Imagen usuario piedra
var userPapel = document.getElementById('userPapel') // Imagen usuario papel
var userTijera = document.getElementById('userTijera') // Imagen usuario tijera

var machinePiedra = document.getElementById('machinePiedra') // Imagen maquina piedra
var machinePapel = document.getElementById('machinePapel') // Imagen maquina papel
var machineTijera = document.getElementById('machineTijera') // Imagen maquina tijera

var btnDisable = document.querySelectorAll('.disable') // Recupero los botones de jugada con la clase .disable

var showTIme = 2500 // Tiempo en que las manos se mostraran

var piedra = 0
var papel = 1
var tijera = 2

var userWin = 0
var machineWin = 0

// Obtengo cantidad de veces a jugar
btnJugar.addEventListener('click', () => {
    btnDisable.forEach( (btn) => {
        btn.classList.remove('disable')
    })    
})

// Función para obtener un numero random entre 0 y 2
function randomNumber(){
    var randNumber = Math.floor( Math.random()*3 )
    return randNumber
}

// Finalizado la partida del juego
function finPartida() {
    var jugadasTotales = document.getElementById('counterTimes').value // Veces a jugar
    if ( jugadasActuales > jugadasTotales ) {
        btnDisable.forEach( (btn) => {
            btn.classList.add('disable')
        })
        return
    }
}

// Función para obtener opción seleccionada por el usuario
function selectedOpt(opcion) {
    
    var jugadasTotales = document.getElementById('counterTimes').value // Veces a jugar

    console.log(jugadasActuales, jugadasTotales)

    if ( jugadasActuales > jugadasTotales ) {
        btnDisable.forEach( (btn) => {
            btn.classList.add('disable')
        })
        return
    }

    // Numero random de la maquina
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

            jugadasActuales++
            finPartida()
            jugadas('empate')

        } else if ( jugadaMachine == papel ) {

            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTIme);

            jugadasActuales++
            finPartida()
            jugadas('perdiste')

        } else if ( jugadaMachine == tijera ) {

            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTIme);

            jugadasActuales++
            finPartida()
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

            jugadasActuales++
            finPartida()
            jugadas('empate')

        } else if ( jugadaMachine == piedra ) {
            
            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTIme);

            jugadasActuales++
            finPartida()
            jugadas('ganaste')

        } else if ( jugadaMachine == tijera ) {

            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTIme);

            jugadasActuales++
            finPartida()
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

            jugadasActuales++
            finPartida()
            jugadas('empate')

        } else if ( jugadaMachine == piedra ) {
            
            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTIme);
            
            jugadasActuales++
            finPartida()
            jugadas('perdiste')

        } else if ( jugadaMachine == papel ) {
            
            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTIme);

            jugadasActuales++
            finPartida()
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



