import logoFooter from '../../../assets/logo/logo-footer.png'

function Footer(){
    return(
        <footer>
            <div className='logo-footer'>
                <img src={logoFooter} alt="logo d'agence"></img>
            </div>
            <div className='footer-rights'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer