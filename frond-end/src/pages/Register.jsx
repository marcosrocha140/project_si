<<<<<<< HEAD
import Input from "../components/Form/Input"
import {Link} from 'react-router-dom'
import { useState } from "react"
import axios from 'axios'
import {usersArray} from '../assets/users'


const Register = () =>{
    const [msgErro, setMsgErro] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rg, setRg] = useState("");


    const cadstrarUser = async (e) =>{
        e.preventDefault();
        setName(name)
        setEmail(email)
        setPassword(password)
        setRg(rg)

        if(!name || !email || !password || !rg){
            setMsgErro("Preencha Todos os Campos!");
            return;
        }

        if(password.length< 8){
            setMsgErro("Senha deve ter no minimo 8 caracteres!");
            return;
        }

        
        const emailUsed = usersArray.some((user) => email === user.email);
        if(emailUsed){
            setMsgErro("E-mail já em uso!");
            return;
        }
     

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
                {msgErro && (
                <p style={{ color: "red", fontSize: "17px", marginBottom: "10px" }}>
                {msgErro}
                </p>
                )}
            </div>
        </div>
    )
}

export default Register
=======
import Input from "../components/Form/Input";
import { Link } from "react-router-dom";
import { RiWomenLine } from "react-icons/ri";
import { PiGenderMaleBold } from "react-icons/pi";
import { FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { usersArray } from "../assets/users";

const Register = () => {     
  const [msgErro, setMsgErro] = useState("");
  const [name, setName] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rg, setRg] = useState("");
  const navigate = useNavigate();

  const cadstrarUser = async (e) => {
    e.preventDefault();
    setName(name);
    setRepeatPass(repeatPass);
    setEmail(email);
    setPassword(password);
    setRg(rg);

    if (!name || !email || !password || !rg) {
      setMsgErro("Preencha Todos os Campos!");
      return;
    }

    if (password.length < 8) {
      setMsgErro("Senha deve ter no minimo 8 caracteres!");
      return;
    }

    if(password != repeatPass){
        setMsgErro('as senhas não coincidem');
        return;
    }

    const emailUsed = usersArray.some((user) => email === user.email);
    if (emailUsed) {
      setMsgErro("E-mail já em uso!");
      return;
    }

    try {
      const responseUser = await axios.post("http://localhost:4000/users", {
        name,
        email,
        password,
        rg,
      });

      navigate('/login')
      alert("Usuário Cadastrado com Sucesso!");
      console.log(responseUser.data);
    } catch (error) {
      if (error.responseUser) {
        alert("Erro: " + error.responseUser.data.error);
      } else {
        alert("Erro na requisição");
      }
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          style={{ width: "80px" }}
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          alt="Imagem Avatar"
        />
        <p className="login_upload">Upload Foto</p>
      </div>

      <div>
        <form
          onSubmit={cadstrarUser}
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <Input text="Nome e Sobrenome" type="text" setValue={setName} />
          
          <div style={{ display: "flex", gap: "10px" }}>
            Genero:
            <label>
              <input type="radio" name="Genero" />
              Masculino
              <PiGenderMaleBold style={{ color: "#08BBE7" }} />
            </label>
            <label>
              <input type="radio" name="Genero" />
              Feminino
              <RiWomenLine style={{ color: "#FF9FD7" }} />
            </label>
          </div>
          <Input text="E-mail" type="email" setValue={setEmail} textPlace='asfarifas@foratemer.org' />
          <span style={{fontSize:'12px', textAlign:'left', color:'gray'}}>Um codigo de validação será enviado para seu email</span>
          <Input text="Senha" type="password" setValue={setPassword} textPlace='********'/>
          <Input text="Repita a senha" type="password" setValue={setRepeatPass} textPlace='********'/>
          <Input
            text="RG"
            min="0"
            type="number"
            textPlace="Apenas numeros"
            setValue={setRg}
          />
          <p style={{ fontSize: "11px" }}>
            Importante para confirmação de participação de clube(caso tenha)
          </p>

          <button type="submit" className="login_btn">
            Cadastrar
          </button>

          <p>
            Já possui cadastro? <Link to="/login">Login</Link>
          </p>
        </form>
        {msgErro && (
            <div className="msgErro">
                <FaExclamationCircle style={{fontSize:'29px', backgroundColor:'orange', borderRadius:'100%'}}/>
                <p>{msgErro}</p>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default Register;
>>>>>>> 8c532c4 (updates)
