import './homePage.scss'
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">
                La mayor red de colaboracion inmobiliaria a
                 tu servicio
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quidem ab esse beatae sapiente a est, nam 
                    explicabo ea, sit natus iste minima assumenda 
                    aperiam officia itaque aliquid quo officiis mollitia.

                </p>
               <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>+20</h1>
                        <h2>Años de experiencia</h2>
                    </div>
                    <div className="box">
                        <h1>2000</h1>
                        <h2>Propiedades vendidas</h2>
                    </div>
                    <div className="box">
                        <h1>+100</h1>
                        <h2>Agencias inmobiliarias</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="fondobg" />
        </div>
    </div>
)
}

export default HomePage