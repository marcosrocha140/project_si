import Admin_nav from "./Admin_nav"
import Admin_Teams from "./Admin_Teams"
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

const Main = () =>{
    return(
        <div style={{display:'flex'}}>
            <BrowserRouter>
                <Admin_nav/>
                <Routes>
                    <Route path="/admin_teams" element={<Admin_Teams/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main