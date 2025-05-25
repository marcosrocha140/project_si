const Input = ({text, type, textPlace}) =>{
    return(
            <label className="login_text">{text}
                <input type={type} placeholder={textPlace} className="login_input"/>
            </label>  
    )
}

export default Input