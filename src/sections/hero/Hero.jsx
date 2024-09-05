import heroTitle from "../../assets/img/hero banner title.svg";
import heroImg from "../../assets/img/hero-img.png";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="text-container">
                <h1 className="wave-text transparent">
                  <span>M</span>
                  <span>A</span>
                  <span>D</span>
                  <span>E</span>
                  <span className="space"> </span>
                  <span>F</span>
                  <span>O</span>
                  <span>R</span>
                </h1>

                <h1 className="wave-text">
                  <span>F</span>
                  <span>O</span>
                  <span>U</span>
                  <span>N</span>
                  <span>D</span>
                  <span>E</span>
                  <span>R</span>
                  <span>S</span>
                </h1>

              </div>
              <div className="services">
                <div className="service">
                  <h3>Business Capital</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                  <button className="btn-dark">Sign Up</button>
                </div>
                <div className="service">
                  <h3>Mentorship</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImg} />
            </div>
            <p className="hero-banner-rotate-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
