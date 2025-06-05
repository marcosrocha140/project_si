import Sidebar from './Sidebar';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Teams from './pages/Teams';
import Matches from './pages/Matches';
import Tournaments from './pages/Tournaments'
import Team from './pages/Team'
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Admin/PageAdmin';
import Profile from './pages/Profile';
import Infor_tournament from './pages/Infor_tournament';
import PageAdmin from './pages/Admin/PageAdmin';
import AdminTeams from './pages/Admin/AdminTeams';
import AdminNews from './pages/Admin/AdminNews';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminUsersCard from './pages/Admin/AdminUsersCard';

function AppLayout(){
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith('/pageadmin') || location.pathname ==='/register' || location.pathname === '/login';

  return(
    <>
        {!hideSidebar && <Sidebar/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/matches' element={<Matches/>}/>
          <Route path='/tournaments' element={<Tournaments/>}/>
          <Route path='/tournaments/infor_tournament' element={<Infor_tournament/>}/>
          <Route path='/team/:id' element={<Team/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/main' element={<Main/>}/>

          {/* Rotas da Pagina de Administração */}
          <Route path='/pageadmin' element={<PageAdmin/>}>
            <Route path='adminteams' element={<AdminTeams/>}/>
            <Route path='adminnews' element={<AdminNews/>}/>
            <Route path='adminusers' element={<AdminUsers/>}/>
            <Route path='adminuserscard' element={<AdminUsersCard/>}/>
          </Route>
          

        </Routes>
    </>
  )
}


function App() {
  
  return (
    <div className="app-container">
        <BrowserRouter>
          <AppLayout/>     
        </BrowserRouter>

    </div>
  );
}

export default App;
