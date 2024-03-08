//import Header from "../../components/layout/header/main";
import React from "react";
import appartementsData from "../../data/appartements.json"
import { useParams, Navigate } from 'react-router-dom'
import TitleLocation from "../../components/label/main"
import Tags from "../../components/tags/main"
import Host from "../../components/host/main"
import Rate from "../../components/rate/main";
import Collapse from "../../components/collapse/main";
import Slideshow from "../../components/slideshow/main";


function Appartement() {
    const { id } = useParams() // Récupère l'ID depuis l'URL
  const selectedAppartement = appartementsData.find((appartement) => appartement.id === id)

  if (!selectedAppartement) {
    return <Navigate to="error" />
  }

  return (
    <section className="appartement-container">
        <Slideshow pictures={selectedAppartement.pictures} />
        <div className="appartement-info_container">
            <div className="appartement-info_profil">
                <TitleLocation title={selectedAppartement.title} location={selectedAppartement.location} />
                <Tags tags={selectedAppartement.tags} />
            </div>
            <div className="appartement-info_host">
                <Host name={selectedAppartement.host.name} picture={selectedAppartement.host.picture} />
                <Rate rating={selectedAppartement.rating} />
            </div>
        </div>
        <div className="collapse-container_appartement">
            <Collapse title={'Description'} description={selectedAppartement.description} />
            <Collapse title={'Équipements'} description={selectedAppartement.equipments} />
        </div>
    </section>
  )
}


export default Appartement