import PropTypes from 'prop-types'
import React from 'react'
import '../../sass/layout/_host.scss'

function Host({name, picture}){

    const spliteHostName = name.split(' ') //pour séparer le nom et prenom
    const formatedHostName = spliteHostName.map((part, id) => (
    <React.Fragment key={`${id}-1`}>
      {part}
      <br />
    </React.Fragment>
  ))

    return(
    <div className="host-profil">
      <p>{formatedHostName}</p>
      <img className="host-picture" src={picture} alt={name} />
    </div>
  )
}

Host.protoTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }
  
  export default Host
