import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Home from '../pages/PageHome';
import Teste from '../pages/PageTest/teste';
// import Page404 from '../components/Page404';

const Main = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/teste" element={<Teste />} />
        </Routes>
    </Router>
);

export default Main;