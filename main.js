// variables de costos
let costoInvitados = 1500;

// captura de la cantidad de invitados
function calcularPresupuesto() {
    let cantidadDeInvitados;
    let cantidadMenores;
    let cantidadAdultos;

// Bucle while para obtener un valor valido 
while (true) {
    let input = prompt("Cuantos invitados tienes?");
    cantidadDeInvitados = parseInt(input);

    if (!isNaN(cantidadDeInvitados) && cantidadDeInvitados >= 0 && cantidadDeInvitados <= 60) {
        break;  
    } else {
        alert("Por favor ingresa un valor valido, recuerda que 60 personas es nuestra capacidad maxima");
    }
}

// do-while para solicitar cantidad de niños y adultos

do {
    let input = prompt("Cuantos de estos son niños?");
    cantidadMenores = parseInt(input);

    if(isNaN(cantidadMenores) || cantidadMenores < 0){
        alert("Por favor ingresa un valor valido de niños");
    }
}while (isNaN(cantidadMenores) || cantidadMenores < 0); 

do {
    let input = prompt("Cuantos de estos son adultos ?");
    cantidadAdultos = parseInt(input);

    if(isNaN(cantidadAdultos) || cantidadAdultos < 0 ){
        alert("Por favor ingresa una cantidad valida, recuerda que debe tener la supervision de al menos un adulto");
    }
}while (isNaN(cantidadAdultos) || cantidadAdultos < 0);

// calculamos la cantidad de adultos y niños y detectamos si hay alguna diferencia con el valor de invitados

if (cantidadMenores + cantidadAdultos !== cantidadDeInvitados) {
    alert("La suma de niños y adultos no coincide con la cantidad total de invitados");
    return;
}


// cambiio valor a numero
cantidadDeInvitados = parseInt(cantidadDeInvitados);

// limitaciones en la cantidad de invitados
if (cantidadDeInvitados > 60){
    alert("60 personas es la capacidad maxima del salon!");
}
else if (cantidadDeInvitados < 30){
    alert("30 persoanas es la capacidad minima del salon!");
}
else {
    let costoTotal= cantidadDeInvitados * costoInvitados;
    alert("El presupuesto totale es de : $" + costoTotal);
}

}