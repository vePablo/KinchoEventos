// ----------------------- segunda entrega

const valorPersona = 1500;
const otrosServicios = [
    { nombre: "Fotografía y Filmación", valor: 800 },
    { nombre: "Música y Luces", valor: 10000 },
    { nombre: "Servicio de Mozos", valor: 600 },
    { nombre: "Animación Infantil", valor: 700 },
    { nombre: "Candy bar", valor: 600 },
];

let serviciosAgregados = [];

function calcularPresupuesto() {
    let nInvitados;
    let nAdultos;
    let nMenores;

    while (true) {
        let input = prompt('¿Cuántos invitados son?');
        nInvitados = parseInt(input);

        if (!isNaN(nInvitados) && nInvitados >= 0 && nInvitados <= 60) {
            break;
        } else {
            alert('Ingresa un valor válido. El salón tiene capacidad máxima de 60');
        }
    }

    do {
        let input = prompt('¿Cuántos de estos son adultos?');
        nAdultos = parseInt(input);
        if (isNaN(nAdultos) || nAdultos < 0) {
            alert('Tu evento debe estar supervisado por al menos un adulto. Por favor, ingresa un valor válido');
        }
    } while (isNaN(nAdultos) || nAdultos < 0);

    nMenores = nInvitados - nAdultos;

    const presupuestoTotal = nInvitados * valorPersona;

    let serviciosTexto = "Otros servicios:\n";

    for (let i = 0; i < otrosServicios.length; i++) {
        serviciosTexto += `${i + 1}. ${otrosServicios[i].nombre}: $${otrosServicios[i].valor}\n`;
    }

    serviciosTexto += `${otrosServicios.length + 1}. Terminar selección de servicios`;

    alert(serviciosTexto);

    while (true) {
        let seleccion = prompt('Selecciona un servicio por número o elige en numero 6 para terminar :');
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

    // calcular el costo total de los servicios agregados
    let costoServiciosAgregados = serviciosAgregados.reduce((total, servicio) => total + servicio.valor, 0);

    // calcular el presupuesto final
    const presupuestoFinal = presupuestoTotal + costoServiciosAgregados;

    document.write('<h2>Resumen del presupuesto</h2>');
    document.write(`<p>Cantidad de adultos: ${nAdultos}</p>`);
    document.write(`<p>Cantidad de niños: ${nMenores}</p>`);
    document.write(`<p>Presupuesto total: $${presupuestoTotal}</p>`);
    document.write(`<p>Costo total de servicios agregados: $${costoServiciosAgregados}</p>`);
    document.write(`<p>Presupuesto final con servicios agregados: $${presupuestoFinal}</p>`);
}

calcularPresupuesto();
