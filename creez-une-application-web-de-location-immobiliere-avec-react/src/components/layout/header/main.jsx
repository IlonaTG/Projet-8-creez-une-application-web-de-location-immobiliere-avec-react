import logo from '../../../assets/logo/logo-header.png'

function Header(){
    return(
    <div className="navbar">
      <div className="logo">
      <img src={logo} alt="logo d'agence"></img>
      </div>
      <div className="links">
        <a className="link-acceuil" href="">Accueil</a>
        <a className="link-apropos" href="../../../pages/apropos/main.jsx">À Propos</a>
      </div>
    </div>
    )
}
export default Header;