const Table = ({textDate, textOpponent, textResult, textlocation}) =>{
    return(
        <>
            <tr>
                <td>{textDate}</td>
                <td>{textOpponent}</td>
                <td>{textResult}</td>
                <td>{textlocation}</td>
            </tr>

        </>
    )
}

export default Table