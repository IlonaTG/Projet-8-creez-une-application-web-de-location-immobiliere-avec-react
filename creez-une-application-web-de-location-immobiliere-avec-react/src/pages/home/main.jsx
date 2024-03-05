import Banner from "../../components/banner/main";
import bannerHomePage from '../../assets/banners/banner-home.png';
import Card from '../../components/card/main';

function Home(){
    return(
        <section className="banner-homepage">
            <Banner image={bannerHomePage} title={'Chez vous, partout et ailleurs'}/>
            <Card />
        </section>
    )
}

export default Home

