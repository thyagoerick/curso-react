import { MyComponent } from "./MyComponent";

// arquivo de estilo

const FirstComponent = () => {
    // essa função faz isso

    /** 
     * multi line
    */
    const componente = "FirstComponent";

    return(
        <div>
            
            {/* Algum comentário */}

            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent nameComponent={componente}/>
        </div>
    )
}

export default FirstComponent;

