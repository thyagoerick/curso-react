import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext);

    !context && console.log('Contexto não encontrado');

    return context;
    
}