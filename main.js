// // ----------------------- segunda entrega

// const valorPersona = 1500;
// const otrosServicios = [
//     { nombre: "Fotografía y Filmación", valor: 800 },
//     { nombre: "Música y Luces", valor: 10000 },
//     { nombre: "Servicio de Mozos", valor: 600 },
//     { nombre: "Animación Infantil", valor: 700 },
//     { nombre: "Candy bar", valor: 600 },
// ];

// let serviciosAgregados = [];

// function calcularPresupuesto() {
//     let nInvitados;
//     let nAdultos;
//     let nMenores;

//     while (true) {
//         let input = prompt('¿Cuántos invitados son?');
//         nInvitados = parseInt(input);

//         if (!isNaN(nInvitados) && nInvitados >= 0 && nInvitados <= 60) {
//             break;
//         } else {
//             alert('Ingresa un valor válido. El salón tiene capacidad máxima de 60');
//         }
//     }

//     do {
//         let input = prompt('¿Cuántos de estos son adultos?');
//         nAdultos = parseInt(input);
//         if (isNaN(nAdultos) || nAdultos < 0) {
//             alert('Tu evento debe estar supervisado por al menos un adulto. Por favor, ingresa un valor válido');
//         }
//     } while (isNaN(nAdultos) || nAdultos < 0);

//     nMenores = nInvitados - nAdultos;

//     const presupuestoTotal = nInvitados * valorPersona;

//     let serviciosTexto = "Otros servicios:\n";

//     for (let i = 0; i < otrosServicios.length; i++) {
//         serviciosTexto += `${i + 1}. ${otrosServicios[i].nombre}: $${otrosServicios[i].valor}\n`;
//     }

//     serviciosTexto += `${otrosServicios.length + 1}. Terminar selección de servicios`;

//     alert(serviciosTexto);

//     while (true) {
//         let seleccion = prompt('Selecciona un servicio por número o elige en numero 6 para terminar :');
//         seleccion = parseInt(seleccion);

//         if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= otrosServicios.length + 1) {
//             if (seleccion === otrosServicios.length + 1) {
//                 break;
//             } else {
//                 serviciosAgregados.push(otrosServicios[seleccion - 1]);
//                 alert(`Agregaste ${otrosServicios[seleccion - 1].nombre} a tu presupuesto.`);
//             }
//         } else {
//             alert('Por favor, ingresa un número válido.');
//         }
//     }

//     // calcular el costo total de los servicios agregados
//     let costoServiciosAgregados = serviciosAgregados.reduce((total, servicio) => total + servicio.valor, 0);

//     // calcular el presupuesto final
//     const presupuestoFinal = presupuestoTotal + costoServiciosAgregados;

//     document.write('<h2>Resumen del presupuesto</h2>');
//     document.write(`<p>Cantidad de adultos: ${nAdultos}</p>`);
//     document.write(`<p>Cantidad de niños: ${nMenores}</p>`);
//     document.write(`<p>Presupuesto total: $${presupuestoTotal}</p>`);
//     document.write(`<p>Costo total de servicios agregados: $${costoServiciosAgregados}</p>`);
//     document.write(`<p>Presupuesto final con servicios agregados: $${presupuestoFinal}</p>`);
// }

// calcularPresupuesto();


//--------------------Entrega n3.
const valorPersona = 1500;
const otrosServicios = [
    { nombre: "Fotografía y Filmación", valor: 800 },
    { nombre: "Música y Luces", valor: 10000 },
    { nombre: "Servicio de Mozos", valor: 600 },
    { nombre: "Animación Infantil", valor: 700 },
    { nombre: "Candy bar", valor: 600 },
];

let serviciosAgregados = [];

//----------------Formulario
document.getElementById('formularioPresupuesto').addEventListener('submit', function (event) {
    event.preventDefault(); //---- para no recargar


    const cantidadInvitados = parseInt(document.getElementById('cantidadInvitados').value);
    const cantidadAdultos = parseInt(document.getElementById('cantidadAdultos').value);


    calcularPresupuesto(cantidadInvitados, cantidadAdultos);
});

//----------------funcion principal
function calcularPresupuesto(nInvitados, nAdultos) {
    let nMenores = nInvitados - nAdultos;
    const presupuestoTotal = nInvitados * valorPersona;

    let serviciosTexto = "Otros servicios:\n";

    //--------------Servicios--- Intente de todas formas y no me salio asi que lo deje asi. La idea era crear tarjetas pero me termine enrredando

    for (let i = 0; i < otrosServicios.length; i++) {
        serviciosTexto += `${i + 1}. ${otrosServicios[i].nombre}: $${otrosServicios[i].valor}\n`;
    }

    serviciosTexto += `${otrosServicios.length + 1}. Terminar selección de servicios`;

    alert(serviciosTexto);

    
    while (true) {
        let seleccion = prompt('Selecciona un servicio por número o elige el número 6 para terminar:');
        seleccion = parseInt(seleccion);

        if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= otrosServicios.length + 1) {
            if (seleccion === otrosServicios.length + 1) {
                break;
            } else {
                serviciosAgregados.push(otrosServicios[seleccion - 1]);
                alert(`Agregaste ${otrosServicios[seleccion - 1].nombre} a tu presupuesto.`);
            }
        } else {
            alert('Por favor, ingresa un número válido.');
        }
    }

    //-----------------------calculos
    let costoServiciosAgregados = serviciosAgregados.reduce((total, servicio) => total + servicio.valor, 0);

    const presupuestoFinal = presupuestoTotal + costoServiciosAgregados;

    //-------------para el DOM
    mostrarResultados(nAdultos, nMenores, presupuestoTotal, costoServiciosAgregados, presupuestoFinal);

    //-------- para el localStorage
    almacenarEnLocalStorage(nAdultos, nMenores, presupuestoTotal, costoServiciosAgregados, presupuestoFinal);
}
//-----------------------> DOM
function mostrarResultados(nAdultos, nMenores, presupuestoTotal, costoServiciosAgregados, presupuestoFinal) {
    
    const resultadosContainer = document.getElementById('resultados-container');

    //------->limpio
    resultadosContainer.innerHTML = '';

    //---------------creo
    const header = document.createElement('h2');
    header.textContent = 'Resumen del presupuesto';
    resultadosContainer.appendChild(header);

    const adultosParrafo = document.createElement('p');
    adultosParrafo.textContent = `Cantidad de adultos: ${nAdultos}`;
    resultadosContainer.appendChild(adultosParrafo);

    const ninosParrafo = document.createElement('p');
    ninosParrafo.textContent = `Cantidad de niños: ${nMenores}`;
    resultadosContainer.appendChild(ninosParrafo);

    const presupuestoTotalParrafo = document.createElement('p');
    presupuestoTotalParrafo.textContent = `Presupuesto total: $${presupuestoTotal}`;
    resultadosContainer.appendChild(presupuestoTotalParrafo);

    const costoServiciosParrafo = document.createElement('p');
    costoServiciosParrafo.textContent = `Costo total de servicios agregados: $${costoServiciosAgregados}`;
    resultadosContainer.appendChild(costoServiciosParrafo);

    const presupuestoFinalParrafo = document.createElement('p');
    presupuestoFinalParrafo.textContent = `Presupuesto final con servicios agregados: $${presupuestoFinal}`;
    resultadosContainer.appendChild(presupuestoFinalParrafo);
}
//------------------->localStorage
function almacenarEnLocalStorage(nAdultos, nMenores, presupuestoTotal, costoServiciosAgregados, presupuestoFinal) {
    
    const datosAlmacenar = {
        adultos: nAdultos,
        ninos: nMenores,
        presupuestoTotal: presupuestoTotal,
        costoServicios: costoServiciosAgregados,
        presupuestoFinal: presupuestoFinal
    };

    
    const datosJSON = JSON.stringify(datosAlmacenar);

    
    localStorage.setItem('datosPresupuesto', datosJSON);
}