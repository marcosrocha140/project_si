import Input from "../components/Form/Input"
import logo from '../images/logoSport.png'
import {Link} from 'react-router-dom'

const Login = () =>{
  
    return(
        <div className="login">
            <div className="login_logo">
                <img style={{width:'80px'}} src={logo} />
                <h1 className="login_welcome">Bem vindo</h1>
            </div>

            <div> 
                <Input text='E-mail' type='email'/>   
                <Input text='Senha' type='password'/>
                <p style={{fontSize:'14px', marginTop:'6px'}}><a href="#">Perdeu acesso a conta?</a></p>
                <button className="login_btn">Login</button>
                <p>Não tem uma conta? <Link to='/register'>Cadastre-se</Link></p>
            </div>
        </div>
    )
}

export default Login