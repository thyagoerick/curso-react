import './MyForm.css'
import { useState } from 'react';

const MyForm = ({ user }) => {

    // 6 - Controlled inputs


    // 3 - gerenciamento de dados (Gerenciamento de dados de input)
    /* Fazemos isso para N campos que tivermos no formulário */
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    /* 
        Função para lidar com o nome (handleName) essa função recebe um evento, porque sempre que  trabalhamos com input de formulário temos o objeto de evento implícito pra ele (e ou event) e podemos usá-lo
    */
    const handleName = (e) => {
        //console.log('mudou o nome');
        console.log(e);
        console.log(e.target.value);
        /* Dentro desse objeto evento (e) temos algumas propriedades, uma delas é o target e dentro dele temos o valor final inserido no input*/

        setName(e.target.value);
        /* A partir desse momento, vamos ter uma alteração do name que temos no nosso state */
    }
    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);

        //validação
        //envio

        /* 7 - Limpando formulário */
        setName('');
        setEmail('');
        setBio('');
        setRole('')
    }

    return (
        <div>
            {/* 5 - envio de form (Envio de formulário) */}
            {/* 1 - criacao de form (Criando formulários) */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}
                        value={name}
                        />
                </div>
                
                {/* 2 - label envolvendo input (Label envolvendo input)*/}
                <label>
                    <span>E-mail:</span>
                    {/* 4 - simplificação de manipulação de state (Alteração de state inline) */}
                    <input type="email" name="email" placeholder="Digite o seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/* 8 - Textarea (Textarea no React) */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}>
                    </textarea>
                </label>
                 {/* 9 - Select - Input de Select (Select no React) */}
                <label>
                    <span>Função no sistema:</span>
                    <select name="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" name="Enviar" />
            </form>


        </div>
    )
}

export default MyForm