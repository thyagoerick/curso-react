const ChangeMessageState = ({handleMessage}) => {
  const messages = ["Oi", "Olá", "Oi, tudo bem?"];
    /** 
     * State lift é básicamente fazer com que outro
     * componente tenha acesso à sua funão set do hook
     * passando ele por uma outra função que pode estar no 
     * App, por exemplo, aí ele ussa essa função fazendo com que
     * um componente seja capaz de alterar o estado do outro.
    */
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState