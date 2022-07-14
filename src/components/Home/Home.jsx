import './Home.css';
import About from '../About/About';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        
                        <div className="text-2">Álvaro Fuentenebro</div>
                        <div className="text-3"><span>Software Developer</span> </div>
                        <div className="text-contact"><a href="#">Contact me</a></div>
                    </div>
                </div>
                <div className='keyDown-content'>
                    <a href='#about'>
                        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
                    </a>
                </div>
            </section>
            
            <About></About>
        </>
    );
}

export default Home;