const Position_table = () =>{
    return(
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th style={{fontSize:'1.3em', fontWeight:'bold'}}>Posição</th>
                    <th style={{fontSize:'1.3em', fontWeight:'bold'}}>Clube</th>
                    <th style={{fontSize:'1.3em', fontWeight:'bold'}}>Jogos</th>
                    <th style={{fontSize:'1.3em', fontWeight:'bold'}}>Pontos</th>
                </tr>
            </thead>

            <tbody style={{width:'100%'}}>
                <tr>
                    <td>1°</td>
                    <td>Donzelas do Fut</td>
                    <td>4</td>
                    <td>10</td>
                </tr>

                <tr>
                    <td>2°</td>
                    <td>Tubaroas da V.D.O</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>3°</td>
                    <td>Cajazeiras F.C</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>4°</td>
                    <td>The Lizzies</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Position_table