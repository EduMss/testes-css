import './inicial.css'
import React from 'react';
import { Link } from 'react-router-dom';


function Inicial() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Pagina Inicial</h1>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/loading`}>Loading</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/MenuAnimado`}>MenuAnimado</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/loading-skeleton`}>Loading-skeleton</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/loading-spinner`}>loading-spinner</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/loading-spinner2`}>loading-spinner2</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/Item-Pag-InicialMove`}>Item-Pag-InicialMove</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/BoxGirando`}>BoxGirando</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/Login1`}>Login1</Link>
            </div>
            <div className='Item-Pag-Inicial'>
                <Link className='Link-ItemPag-Inicial' to={`/DragAndDrop`}>DragAndDrop</Link>
            </div>
        </div>
    );
  }
  
  export default Inicial;