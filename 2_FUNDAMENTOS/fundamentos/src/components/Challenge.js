/*  
    NÃO PRECISA MAIS DE:
        import React from 'react'
    ESSA IMPORTAÇÃO É ANTIGA, AGORA OS COMPONENTES FUNCIONAM SEM ELA
*/

// DESAFIO - TÓPICO 1 - FEITO
const Challenge = () => {
    
    // DESAFIO - TÓPICO 3 - FEITO
    let a = 25;
    let b = 45;

    return(
        <div>
            {/*DESAFIO - TÓPICO 4 - FEITO*/}
            <h3>Número A: {a}</h3>
            <h3>Número B: {b}</h3>
            
            {/*DESAFIO - TÓPICO 5 - FEITO*/}
            <button onClick={() => console.log(a + b)}>Somar</button>
        </div>
    );

};

export default Challenge;