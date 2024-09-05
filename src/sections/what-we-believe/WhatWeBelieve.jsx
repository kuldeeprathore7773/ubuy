import bottomBannerImg from "../../assets/img/bottom-banner-img.png";

function WhatWeBelieve() {
  return (
    <>
      <section className="what-we-believe">
        <div className="container">
          <div className="what-we-believe-inner">
            <p className="hero-banner-rotate-text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="hero-image">
              <img src={bottomBannerImg} />
            </div>
            <div className="hero-text">
                <h3>WHAT WE BELIEVE IN:</h3>
                <h2>More than money. </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <button className="transparent-btn">Sign In</button>
            </div>
          </div>
          <span className="what-we-believe-batch">BATCH ‘21</span>
        </div>
      </section>
    </>
  );
}

export default WhatWeBelieve;
