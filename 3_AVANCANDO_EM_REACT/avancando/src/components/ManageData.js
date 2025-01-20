import {useState} from 'react';

const ManageData = () => {
    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number);

    return(
        <div>
            <div>
                {/* Funções no evento:
                Quando as funções são simples, podemos realizar a lógica no próprio evento
                */}
                <p>Valor: {someData}</p>
                <button onClick={() => ( someData = 15 )}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar o state</button>
            </div>
        </div>
    );
};

export default ManageData;