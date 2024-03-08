import PropTypes from 'prop-types'
import '../../sass/layout/_labelTags.scss'

function Label ({title, location}){
return(
    <div className='label-container'>
        <h1 className='appartement-title'>{title}</h1>
        <p className='appartement-location'>{location}</p>
    </div>
)
}

Label.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }
  
Label.defaultProps = {
    title: '',
    location: '',
  }

export default Label