import hero from '../../assets/hero.jpg'
import '../Navbar/Navbar.css'
function Hero() {
    return (
        <div>
            <img className='img-size' src={hero} alt="" />
        </div>
    );
}

export default Hero;