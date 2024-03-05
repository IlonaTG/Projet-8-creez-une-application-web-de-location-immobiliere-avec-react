

function Banner({ image, title }){
    return(
        < div className='banner'>
            <img className='banner-image' src={image} alt='banner'></img>
            <div className="banner-background"></div>
            <h1 className="banner-title">{title}</h1>
            
        </div>
    )
}
export default Banner;