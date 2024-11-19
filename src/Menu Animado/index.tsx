import './MenuAnimado.css'
import React, {useEffect, useState} from 'react'
//https://cdnjs.com/libraries/font-awesome
//https://fontawesome.com/search?q=bars&o=r
//https://cubic-bezier.com/#.52,2.08,1,-0.33

const MenuAnimado = () => {
    const [isAtivo, setIsAtivo] = useState(false);


    useEffect(() => {
        document.body.style.backgroundColor = isAtivo ? '#34495e' : '#ecf0f1';
    }, [isAtivo]);

    return(
    <>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ=="  crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <div className='MenuAnimado'>
            <button className={`botao-menu ${isAtivo ? 'ativo' : ''}`}
                onClick={() => {
                    isAtivo ? setIsAtivo(false) : setIsAtivo(true)
                }}
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <nav className={`menu-lateral ${isAtivo ? 'ativo' : ''}`}>
                <ul>
                    <li>
                        <a href='#'>
                            <i className="fa-solid fa-house"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className="fa-solid fa-circle-info"></i>
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className="fa-solid fa-gears"></i>
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className="fa-solid fa-envelope"></i>
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={`background ${isAtivo ? 'ativo' : ''}`}
                onClick={() => {
                    isAtivo ? setIsAtivo(false) : setIsAtivo(true)
                }}
            ></div>

            <main className={`conteudo ${isAtivo ? 'ativo' : ''}`}>
                <h1>Aprendendo Menu Animado</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sequi quos, laborum aut nostrum dignissimos vero dolores possimus ad. Blanditiis minima itaque sequi natus placeat aut non fugiat error officiis.</p>
            </main>
        </div>

    </>
    );
}

export default MenuAnimado