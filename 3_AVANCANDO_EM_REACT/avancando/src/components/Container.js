
const Container = ({myValue, children}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <p> O valor é: {myValue} </p>
    </div>
  )
}

export default Container