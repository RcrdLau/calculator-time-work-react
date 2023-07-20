import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// @ts-ignore
import uuid from 'react-uuid'
// import { SNACK_ERROR, TESTING } from "../redux/actions/actionsTypes";
// import { store } from "../redux/store";

const Teste = () => {
    // const estado: any = useSelector((state) => state);
    // const tester = estado.PersistTest.testVariavel;
    // console.log("estado: ", estado);
    // console.log("tester: ", tester);
    return (
        <div
            className="App"
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Teste React
            </a>
            {/* <button
                onClick={() => {
                    store.dispatch({
                        type: SNACK_ERROR,
                        snackError: true,
                        snackMensagem: "teste",
                    });
                }}
            >
                {estado.Exemplos.snackMensagem === ""
                    ? "alterar"
                    : estado.Exemplos.snackMensagem}
            </button>
            <button
                onClick={() => {
                    store.dispatch({
                        type: TESTING,
                        testVariavel: !tester,
                    });
                }}
            >
                Persist
            </button>
            {tester && <p>Está TRUE</p>}
        */}
        <Link to="/home">voltar</Link>
        <p>uuid: {uuid()}</p> 
        </div>
    );
}

export default Teste;
