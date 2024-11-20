import "./DragAndDrop.css"
import React from "react"
import { ItemProps } from "./interface"

// const Item: React.FC<ItemProps> = ({itemRef,MouseDown,MouseMove,MouseUp, index, itemAtivo}) => {
const Item: React.FC<ItemProps> = ({itemRef,MouseDown,MouseUp, index, itemAtivo}) => {
    return(
        <div className={`Item ${itemAtivo === index ? 'ativo' : ''}`}
            ref={itemRef}
            onMouseDown={(e) => MouseDown(e, index)}
            // onMouseMove={(e) => MouseMove(e, index)}
            onMouseUp={MouseUp}
        ></div>
    );
}

export default Item;