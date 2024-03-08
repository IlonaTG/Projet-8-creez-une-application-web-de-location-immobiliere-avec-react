import Banner from '../../components/banner/main';
import bannerAproposPage from '../../assets/banners/banner-apropos.png';
import React from 'react';
import Collapse from '../../components/collapse/main';
import aproposData from '../../data/apropos.json';

function Apropos(){
    const collapseContent = aproposData.map((item) => (
        <Collapse 
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))

    return(
        
        <section className="banner-homepage">
            <Banner image={bannerAproposPage} />
            <section className="collapse-container_apropos">{collapseContent}</section>
        </section>
    )
}

export default Apropos