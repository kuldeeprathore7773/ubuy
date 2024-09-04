import heroTitle from "../../assets/img/hero banner title.svg";
import heroShape from "../../assets/img/hero Shape.svg";

function Hero(){
    return(
        <>
        <section className="hero">
        <div className="hero-text">
          <h1><img src={heroTitle} alt="" srcset="" /></h1>
          <div className="services">
            <div className="service">
              <h2>Business Capital</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Sign Up</button>
            </div>
            <div className="service">
              <h2>Mentorship</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroShape}/>
        </div>
      </section>
      </>
    );
}

export default Hero;