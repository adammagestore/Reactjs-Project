import React from 'react';
import Main from './components/MainComponent';
import "./App.css";
import {BrowserRouter} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <div className="App">
            <Main/>
        </div>
    </BrowserRouter>
);

export default App;
