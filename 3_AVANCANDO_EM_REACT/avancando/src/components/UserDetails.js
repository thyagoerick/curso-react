const UserDetails = ({nameUser, age, job, children}) => {
  return (
    <div style={{padding:10, margin:20, outline:'4px solid #045770', borderRadius: 10, backgroundColor: '#9FC9DA'}}>
    
        <h2 style={{color:'#045770'}}>Desafio 4</h2>

        <div style={{
            backgroundColor: '#06A3CA',
            borderRadius: 10, margin:20,
            padding:5, color:'#FFFFFF'
        }}>
            <h3>Nome: {nameUser}</h3>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
        </div>

        {children}      
    </div>
    
  );
};

export default UserDetails;