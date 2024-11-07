// import './style.css'
import React from 'react';
import { Link } from 'react-router-dom';


function Inicial() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Pagina Inicial</h1>
            <Link to={`/loading`}>Loading</Link>
            <Link to={`/loading-skeleton`}>Loading-skeleton</Link>
            <Link to={`/loading-spinner`}>loading-spinner</Link>
            <Link to={`/loading-spinner2`}>loading-spinner2</Link>
            <Link to={`/ItemMove`}>ItemMove</Link>
            <Link to={`/BoxGirando`}>BoxGirando</Link>
        </div>
    );
  }
  
  export default Inicial;