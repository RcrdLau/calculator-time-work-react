import { Dispatch, SetStateAction } from "react";

export const AddHours = (timeStart: string, timeStop: string) => {
    console.log("timeStart: ", timeStart)
    console.log("timeStop: ", timeStop)
    // Dividimos as horas e minutos em dois arrays
    const [horas1, minutos1] = timeStart.split(':').map(Number);
    const [horas2, minutos2] = timeStop.split(':').map(Number);

    // Somamos os minutos e verificamos se precisamos ajustar as horas
    let minutosTotal = minutos1 + minutos2;
    let horasTotal = horas1 + horas2;

    // Verificamos se os minutos ultrapassam 59 e ajustamos as horas e minutos
    if (minutosTotal > 59) {
        horasTotal += Math.floor(minutosTotal / 60);
        minutosTotal %= 60;
    }

    // Ajustamos as horas para ficar dentro do formato de 24 horas (0-23)
    horasTotal %= 24;

    // Formatamos a string de retorno
    const horaFormatada = horasTotal.toString().padStart(2, '0');
    const minutosFormatados = minutosTotal.toString().padStart(2, '0');

    console.log(`Somou: ${horaFormatada}:${minutosFormatados}`)
    return `${horaFormatada}:${minutosFormatados}`;
}


export const SubtractHours = (
    timeStart: string,
    timeStop: string,
    setTime: Dispatch<SetStateAction<string>>
) => {
    // Dividimos as horas e minutos em dois arrays
    const [horas1, minutos1] = timeStart.split(':').map(Number);
    const [horas2, minutos2] = timeStop.split(':').map(Number);

    // Calculamos a diferença dos minutos e verificamos se precisamos ajustar as horas
    let minutosTotal = minutos1 - minutos2;
    let horasTotal = horas1 - horas2;

    // Verificamos se os minutos são negativos e ajustamos as horas e minutos
    if (minutosTotal < 0) {
        horasTotal -= 1;
        minutosTotal += 60;
    }

    // Ajustamos as horas para ficar dentro do formato de 24 horas (0-23)
    horasTotal = (horasTotal + 24) % 24;

    // Formatamos a string de retorno
    const horaFormatada = horasTotal.toString().padStart(2, '0');
    const minutosFormatados = minutosTotal.toString().padStart(2, '0');

    console.log(`Subtraiu: ${horaFormatada}:${minutosFormatados}`)
    setTime(`${horaFormatada}:${minutosFormatados}`)
}

