import Banner from '../../components/banner/main';
import bannerAproposPage from '../../assets/banners/banner-apropos.png';


function Apropos(){
    return(
        <section className="banner-homepage">
            <Banner image={bannerAproposPage} />
        </section>
    )
}

export default Apropos