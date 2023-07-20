import React from "react";
import Header from "../../components/Header";
import { MainContainer } from "./styles";
import CalculatorTime from "../../components/CalculatorTime";


const Home = () => {

    return (
        <MainContainer>
            <Header></Header>
            <CalculatorTime></CalculatorTime>
        </MainContainer>
    );
}

export default Home;
