import logoSport from './images/logoSport.png'
import Sidebar_navigation from './sidebar_navigation';

function Sidebar() {
    return (
      <div className='sidebar_main'>
        <div className="sidebar">
        <div className='sidebar_top'>
            <img className="sidebar_logo" src={logoSport} alt="Logo App" />
            <h2 className="sidebar_title">Sport Interior</h2>
        </div>
        
      </div>
      <Sidebar_navigation/>
      </div>
    );
  }
  
  export default Sidebar;
  