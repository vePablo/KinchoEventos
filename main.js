// variables de costos
let costoInvitados = 1500;

// captura de la cantidad de invitados
function calcularPresupuesto() {
    let cantidadDeInvitados = prompt("Cuantos invitdos tienes ?");
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