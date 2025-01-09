import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(function(){
    counter ++;
    root.render(
    <>
    <Home seconds={counter}/>    
    </>
);
},1000);