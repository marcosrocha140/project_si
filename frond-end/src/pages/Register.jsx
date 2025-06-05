import Input from "../components/Form/Input"
import {Link} from 'react-router-dom'
import { useState } from "react"
import axios from 'axios'


const Register = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rg, setRg] = useState();


    const cadstrarUser = async (e) =>{
        e.preventDefault();
        setName(name)
        setEmail(email)
        setPassword(password)
        setRg(rg)

        try {
            const responseUser = await axios.post("http://localhost:4000/users", {
                name,
                email,
                password,
                rg
            });

            alert("Usuário Cadastrado com Sucesso!");
            console.log(responseUser.data);

            
        } catch (error) {
            if(error.responseUser){
                alert("Erro: "+error.responseUser.data.error);
            }else{
                alert("Erro na requisição");
            }
            console.log(error);
        }
    }

    return(
        <div className="login">
            <div className="login_logo">
                <img style={{width:'80px'}} src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Imagem Avatar" />
                <p className="login_upload">Upload Foto</p>
            </div>

            <div>
                <form onSubmit={cadstrarUser}>
                    <Input text='Nome e Sobrenome' type='text' setValue={setName}/>  
                    <Input text='E-mail' type='email' setValue={setEmail}/>   
                    <Input text='Senha' type='password' setValue={setPassword}/>
                    <Input text='RG' min='0' type='number'textPlace='Apenas numeros' setValue={setRg}/>
                    <p style={{fontSize:'11px'}}>Importante para confirmação de participação de clube(caso seja)</p>

                    <button type="submit" className="login_btn">Cadastrar</button>

                    <p>Já possui cadastro? <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register