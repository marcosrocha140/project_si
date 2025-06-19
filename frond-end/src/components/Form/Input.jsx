const Input = ({text, type, textPlace, setValue}) =>{
    return(
            <label className="login_text">{text}
                <input type={type} placeholder={textPlace} required className="login_input" onChange={(e) => setValue(e.target.value)
                } />
            </label>  
    )
}

export default Input