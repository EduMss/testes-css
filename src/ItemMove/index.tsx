import React, {useState} from "react";
import './styleItemMove.css';

export default function ItemMove() {
    const [isAtivos, setIsAtivos] = useState(false); // Estado para controlar a animação de saída
    const [isAtivos2, setIsAtivos2] = useState(false); // Estado para controlar a animação de saída

    const toggleMove = () => {
        if (isAtivos) {
            // Se já estiver visível, define a animação de saída
            setIsAtivos(false);
        } else {
            // Exibe a div imediatamente quando deve aparecer
            setIsAtivos(true);
        }
    };
    const toggleMove2 = () => {
        if (isAtivos2) {
            // Se já estiver visível, define a animação de saída
            setIsAtivos2(false);
        } else {
            // Exibe a div imediatamente quando deve aparecer
            setIsAtivos2(true);
        }
    };

    return (
        <div className={`ItemMove`}>
            <div className="NavBar">
                <button onClick={toggleMove}>{isAtivos ? "Ocultar" : "Aparecer"}</button>
                <button onClick={toggleMove2}>{isAtivos2 ? "Ocultar2" : "Aparecer2"}</button>
            </div>
            <div className={`AreaMove`}>
                <div className={`Move ${isAtivos ? 'ativo' : ''}`}></div>
                <div className={`RestoTela`}></div>
                <div className={`Move2 ${isAtivos2 ? 'ativo' : ''}`}></div>
            </div>
        </div>
    );
}