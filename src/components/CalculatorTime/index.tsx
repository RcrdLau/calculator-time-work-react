import React, { useEffect, useState } from "react";
import { CalculatorContainer, Label, ResultContainer, ResultTimeWorked, ResultTimeWorkedText, StartButton, TimeInput } from "./styles";
import { AddHours, SubtractHours } from "./utils";

const CalculatorTime = () => {

    const [timeWorked, setTimeWorked] = useState<string>("00:00")
    const [timeRemaing, setTimeRemaing] = useState<string>("08:00")

    const [timeEnter, setTimeEnter] = useState<string>("00:00")
    const [timeExit, setTimeExit] = useState<string>("00:00")

    useEffect(() => {
        SubtractHours("08:00", timeWorked, setTimeRemaing)
    }, [timeWorked])

    return (
        <CalculatorContainer>
            <ResultContainer>
                <ResultTimeWorked>
                    <Label>Horas Trabalhadas:</Label>
                    <ResultTimeWorkedText>
                        {timeWorked}
                    </ResultTimeWorkedText>
                </ResultTimeWorked>
                <ResultTimeWorked>
                    <Label>Horas Restantes:</Label>
                    <ResultTimeWorkedText>
                        {timeRemaing}
                    </ResultTimeWorkedText>
                </ResultTimeWorked>
            </ResultContainer>
            <Label>Hora de entrada: </Label>
            <TimeInput
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
                onChange={(e) => {
                    console.log("event: ", e.target.value)
                    setTimeEnter(e.target.value)
                }}
            />
            <Label>Hora de saída: </Label>
            <TimeInput
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
                onChange={(e) => {
                    console.log("event: ", e.target.value)
                    setTimeExit(e.target.value)
                }}
            />
            {console.log("timeWorked: ", timeWorked)}
            {console.log("timeRemaing: ", timeRemaing)}
            <StartButton
                // onClick={() => AddHours(timeEnter, timeExit)}
                onClick={() => {
                    SubtractHours(timeExit, timeEnter, setTimeWorked)
                }}
            >
                Iniciar
            </StartButton>
        </CalculatorContainer >
    );
}

export default CalculatorTime;
