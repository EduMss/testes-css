import "./DragAndDrop.css"
import React, {useState, useRef} from "react"
import { Cordenadas } from "./interface"
import Item from "./Item.tsx"

const DragAndDrop = () => {
    const [cordenada, setCordenada] = useState<Cordenadas>({
        newX: 0,
        newY: 0,
        startX: 0,
        startY: 0,
    })
    const [isMouseDown,setIsMouseDown] = useState(false);
    const [itemAtivo, setItemAtivo] = useState(-1);
    const itemRef = useRef<(HTMLDivElement | null)[]>([]);
    const areaRef = useRef<HTMLDivElement | null>(null);

    function MouseDown(e: React.MouseEvent, index: number) {
        setItemAtivo(index);
        setIsMouseDown(true);
        setCordenada((cordenada) => ({
          ...cordenada,
          startX: e.clientX,
          startY: e.clientY,
        }));
    }

    // function MouseMove(e: React.MouseEvent, index: number){
    //     if(isMouseDown && itemAtivo === index){
    //         setCordenada((cordenada) => ({
    //             newX: cordenada.startX - e.clientX,
    //             newY: cordenada.startY - e.clientY,
    //             startX: e.clientX,
    //             startY: e.clientY,
    //         }));
    //         if(itemRef.current[index] && areaRef.current){
    //             // Pega as dimensões da área de arraste
    //             const areaRect = areaRef.current.getBoundingClientRect();
    //             const itemRect = itemRef.current[index].getBoundingClientRect();

    //             // Calcula as novas posições, restringindo dentro da área
    //             const newLeft = Math.min(
    //                 Math.max(itemRef.current[index].offsetLeft - cordenada.newX, 0), // Não ultrapassa o lado esquerdo
    //                 areaRect.width - itemRect.width // Não ultrapassa o lado direito
    //             );
    //             const newTop = Math.min(
    //                 Math.max(itemRef.current[index].offsetTop - cordenada.newY, 0), // Não ultrapassa o topo
    //                 areaRect.height - itemRect.height // Não ultrapassa o fundo
    //             );

    //             itemRef.current[index].style.left = `${newLeft}px`;
    //             itemRef.current[index].style.top = `${newTop}px`;
    //         }
    //     }
    // }

    function MouseMove(e: React.MouseEvent){
        if(isMouseDown && itemAtivo !== -1){
            setCordenada((cordenada) => ({
                newX: cordenada.startX - e.clientX,
                newY: cordenada.startY - e.clientY,
                startX: e.clientX,
                startY: e.clientY,
            }));
            if(itemRef.current[itemAtivo] && areaRef.current){
                // Pega as dimensões da área de arraste
                const areaRect = areaRef.current.getBoundingClientRect();
                const itemRect = itemRef.current[itemAtivo].getBoundingClientRect();

                // Calcula as novas posições, restringindo dentro da área
                const newLeft = Math.min(
                    Math.max(itemRef.current[itemAtivo].offsetLeft - cordenada.newX, 0), // Não ultrapassa o lado esquerdo
                    areaRect.width - itemRect.width // Não ultrapassa o lado direito
                );
                const newTop = Math.min(
                    Math.max(itemRef.current[itemAtivo].offsetTop - cordenada.newY, 0), // Não ultrapassa o topo
                    areaRect.height - itemRect.height // Não ultrapassa o fundo
                );

                itemRef.current[itemAtivo].style.left = `${newLeft}px`;
                itemRef.current[itemAtivo].style.top = `${newTop}px`;
            }
        }
    }

    function MouseUp(e: React.MouseEvent){
        setIsMouseDown(false)
        setItemAtivo(-1);
    }

    return(
        <div className="DragAndDrop">
            <div className="AreaDragAndDrop" ref={areaRef} onMouseMove={MouseMove} onMouseUp={MouseUp}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Item
                        key={index}
                        index={index}
                        itemRef={(el) => (itemRef.current[index] = el)} 
                        MouseDown={MouseDown}
                        // MouseMove={MouseMove}
                        MouseUp={MouseUp}
                        itemAtivo={itemAtivo}
                    />
                ))}
            </div>
        </div>
    )
}

export default DragAndDrop;
