import logo from '../../../assets/logo/logo-header.png'
import {Link} from 'react-router-dom';

function Header(){
    return(
    <div className="navbar">
      <div className="logo">
        <Link className='link-acceuil_logo' to="/">
        <img src={logo} alt="logo d'agence"/>
        </Link>
      </div>
      <div className="links">
        <Link className="link-acceuil" exact="true" to="/">Accueil</Link>
        <Link className="link-apropos" to="/apropos">À Propos</Link>
      </div>
    </div>
    )
}
export default Header;