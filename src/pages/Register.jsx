import Input from "../components/Form/Input"
import {Link} from 'react-router-dom'

const Register = () =>{
    return(
        <div className="login">
            <div className="login_logo">
                <img style={{width:'80px'}} src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Imagem Avatar" />
                <p className="login_upload">Upload Foto</p>
            </div>

            <div>
                <Input text='Nome e Sobrenome' type='text'/>  
                <Input text='E-mail' type='email'/>   
                <Input text='Senha' type='password'/>
                <Input text='RG' min='0' type='number'textPlace='Apenas numeros'/>
                <p style={{fontSize:'11px'}}>Importante para confirmação de participação de clube(caso seja)</p>
                <button className="login_btn">Cadastrar</button>
                <p>Já possui cadastro? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Register