<<<<<<< HEAD
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Form/Input"
import logo from '../images/logoSport.png'
import {Link} from 'react-router-dom'
import axios from "axios"

const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('')
    const navigate = useNavigate();

    const checkLogin = async (e) =>{
        e.preventDefault();
        try {
            const responseUserLogin = await axios.post(`http://localhost:4000/login`, {
                email,
                password,
            });

            localStorage.setItem('token', responseUserLogin.data.token);
            localStorage.setItem('user', JSON.stringify(responseUserLogin.data.user));
            navigate("/home");
            alert("Login Realizado com sucesso!");
            
        } catch (error) {
            setErro("Credenciais Invalidas! Tente Novamente.");
            console.log("Error:", error);
        }
    }
  
    return(
        <div className="login">
            <div className="login_logo">
                <img style={{width:'80px'}} src={logo} />
                <h1 className="login_welcome">Bem vindo</h1>
            </div>

            <form onSubmit={checkLogin}> 
                <Input text='E-mail' type='email' setValue={setEmail}/>   
                <Input text='Senha' type='password' setValue={setPassword}/>
                <p style={{fontSize:'14px', marginTop:'6px'}}><a href="#">Perdeu acesso a conta?</a></p>
                <button type="submit" className="login_btn">Login</button>
                <p>Não tem uma conta? <Link to='/register'>Cadastre-se</Link></p>
                {erro && <p style={{color:'yellow'}}>{erro}</p>}
            </form>
        </div>
    )
}

export default Login
=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Form/Input";
import logo from "../images/logoSport.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext"; // ajuste o caminho se necessário

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const checkLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });

      login(response.data.user, response.data.token);
      navigate("/");
      alert("Login realizado com sucesso!");
    } catch (error) {
      setErro("Credenciais inválidas! Tente novamente.");
      console.log("Error:", error);
    }
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img style={{ width: "80px" }} src={logo} />
        <h1 className="login_welcome">Bem vindo</h1>
      </div>

      <form onSubmit={checkLogin}>
        <Input text="E-mail" type="email" setValue={setEmail} />
        <Input text="Senha" type="password" setValue={setPassword} />
        <p style={{ fontSize: "14px", marginTop: "6px" }}>
          <a href="#">Perdeu acesso a conta?</a>
        </p>
        <button type="submit" className="login_btn">
          Login
        </button>
        <p>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
        {erro && <p style={{ color: "yellow" }}>{erro}</p>}
      </form>
    </div>
  );
};

export default Login;
>>>>>>> 8c532c4 (updates)
