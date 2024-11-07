import React, {useState} from "react";
import './styleItemMove.css';

export default function ItemMove() {
    const [showMove, setShowMove] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar a animação de saída

    const toggleMove = () => {
        if (showMove) {
            // Se já estiver visível, define a animação de saída
            setIsAnimating(true);
            setTimeout(() => {
                setShowMove(false);
                setIsAnimating(false);
            }, 600); // Tempo em milissegundos igual ao da animação de saída
        } else {
            // Exibe a div imediatamente quando deve aparecer
            setShowMove(true);
        }
    };

    return (
        <div className={`ItemMove`}>
            <div className="NavBar">
                <button onClick={toggleMove}>{showMove ? "Ocultar" : "Aparecer"}</button>
            </div>
            <div className={`AreaMove`}>
                {showMove && (
                    <div className={`Move ${isAnimating ? 'slide-out' : 'slide-in'}`}></div>
                )}
                <div className="RestoTela">

                </div>
            </div>
        </div>
    );
}