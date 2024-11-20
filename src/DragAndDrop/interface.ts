import { Dispatch, SetStateAction, MutableRefObject } from "react";

export interface Cordenadas {
    newX: number;
    newY: number;
    startX: number;
    startY: number;
}

export interface ItemProps {
    //setIsMouseDown: Dispatch<SetStateAction<boolean>>; // Tipo para um setter de useState booleano
    //setCordenada: Dispatch<SetStateAction<Cordenadas>>; // Tipo para um setter de useState com objeto
    // itemRef: MutableRefObject<HTMLDivElement | null>; // Tipo para um useRef que aponta para um elemento HTML
    itemRef: (el: HTMLDivElement | null) => void;
    MouseDown: (e: React.MouseEvent, index: number) => void; // Função para evento de mouse down
    // MouseMove: (e: React.MouseEvent, index: number) => void; // Função para evento de mouse move
    MouseUp: (e: React.MouseEvent) => void;   // Função para evento de mouse up
    index: number;
    // setItemAtivo: Dispatch<SetStateAction<number>>;
    itemAtivo: number;
}