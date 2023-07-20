import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.label`
    font-size: 20px;
`;

export const TimeInput = styled.input`
    padding: 10px;
    margin: 20px;
`;

export const StartButton = styled.button`
    padding: 10px;
    margin: 20px;
`;

export const ResultContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ResultTimeWorked = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-top: 3px solid blue;
    border-bottom: 3px solid blue;
`;

export const ResultTimeWorkedText = styled.p`
    border: 1px solid black;
    border-radius:  8px;
    padding: 12px;
    margin-left: 8px;
    background-color: white;

`;