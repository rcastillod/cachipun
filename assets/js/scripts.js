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

var contenedorBtns = document.getElementById('contenedorButtons') // Recupero el contenedor de los botones de jugada con la clase .disable
var contenedorMessage = document.getElementById('message') // Recupero el contenedor de los mensajes

var showTime = 2500 // Tiempo en que las manos se mostraran

var piedra = 0
var papel = 1
var tijera = 2

var userWin = 0
var userLose = 0
var userTie = 0
var userFin = ''

// Obtengo cantidad de veces a jugar
btnJugar.addEventListener('click', () => {
    contenedorBtns.classList.remove('disable')
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
        contenedorBtns.classList.add('disable')
        contenedorMessage.classList.remove('disable')
        return
    }
}

// Función para obtener opción seleccionada por el usuario
function selectedOpt(opcion) {
    
    var jugadasTotales = document.getElementById('counterTimes').value // Veces a jugar

    console.log(jugadasActuales, jugadasTotales)

    if ( jugadasActuales > jugadasTotales ) {
        contenedorBtns.classList.add('disable')
        contenedorMessage.classList.remove('disable')
        return
    }

    // Numero random de la maquina
    var jugadaMachine = randomNumber()

    // Piedra
    if ( opcion == piedra ) {
        
        userPiedra.classList.add('show')
        setTimeout(() => {
            userPiedra.classList.remove('show')
        }, showTime);

        if ( jugadaMachine == piedra ) {

            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTime);

            jugadasActuales++
            finPartida()
            jugadas('empate')

        } else if ( jugadaMachine == papel ) {

            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTime);

            jugadasActuales++
            finPartida()
            jugadas('perdiste')

        } else if ( jugadaMachine == tijera ) {

            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTime);

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
        }, showTime);

        if ( jugadaMachine == papel ) {

            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTime);

            jugadasActuales++
            finPartida()
            jugadas('empate')

        } else if ( jugadaMachine == piedra ) {
            
            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTime);

            jugadasActuales++
            finPartida()
            jugadas('ganaste')

        } else if ( jugadaMachine == tijera ) {

            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTime);

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
        }, showTime);

        if ( jugadaMachine == tijera ) {
            
            machineTijera.classList.add('show')
            setTimeout(() => {
                machineTijera.classList.remove('show')
            }, showTime);

            jugadasActuales++
            finPartida()
            jugadas('empate')

        } else if ( jugadaMachine == piedra ) {
            
            machinePiedra.classList.add('show')
            setTimeout(() => {
                machinePiedra.classList.remove('show')
            }, showTime);
            
            jugadasActuales++
            finPartida()
            jugadas('perdiste')

        } else if ( jugadaMachine == papel ) {
            
            machinePapel.classList.add('show')
            setTimeout(() => {
                machinePapel.classList.remove('show')
            }, showTime);

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

        userTie++
        
    } else if ( resultado == 'perdiste' ) {
        
        resIconUser.classList.add('fa-solid', 'fa-xmark', 'lose')
        resIconMachine.classList.add('fa-solid', 'fa-check', 'win')

        userLose++

    } else if ( resultado == 'ganaste' ) {
        
        resIconUser.classList.add('fa-solid', 'fa-check', 'win')
        resIconMachine.classList.add('fa-solid', 'fa-xmark', 'lose')

        userWin++

    }

    if ( userWin > userLose ) {
        userFin = 'ganaste'
    } else if ( userWin < userLose ) {
        userFin = 'perdiste'
    } else if ( userWin == userLose ) {
        userFin = 'empataste'
    }

    contenedorMessage.innerHTML = `
        <div class="mensaje-final__contador">
        <p class="mensaje-final__ganaste">Ganaste: ${userWin} veces</p>
        <p class="mensaje-final__perdiste">Perdiste: ${userLose} veces</p>
        <p class="mensaje-final__empataste">Empataste: ${userTie} veces</p>
        </div>
        <div  class="mensaje-final__resultado">
            <span>${userFin}!</span>
            <img src="assets/img/img-${userFin}.png">
        </div>
    `

    console.log(`Ganaste: ${userWin} veces`, `Perdiste: ${userLose} veces`, `Empataste: ${userTie} veces`)
}



