const Add = ({title, addtext}) =>{
    return(
        <div className="users">
            <div className="users_top">
                <h2>{title}</h2>
                <button className="user_top_btn">{addtext}</button>
            </div>

        </div>
    )
}

export default Add