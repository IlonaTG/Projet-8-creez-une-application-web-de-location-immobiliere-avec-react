import { Link } from 'react-router-dom'
import '../../../sass/layout/_error.scss'

function Error(){
    return(
        <section className='error-section'>
            <h1 className='error-number'>404</h1>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error-back_home' to={'/'}>Retourner sur la page d’accueil</Link>
        </section>
    )
}

export default Error