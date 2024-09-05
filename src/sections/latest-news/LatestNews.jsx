import latestNews from "../../assets/img/latest-news.svg";
import newsImg1 from "../../assets/img/news-img-1.png";
import newsImg2 from "../../assets/img/news-img-2.png";
import newsImg3 from "../../assets/img/news-img-3.png";

function LatestNews() {
  return (
    <section className="latest-news">
      <div className="container">
        <div className="text-container latest-news-text-wave">
          <h2 className="wave-text transparent">
            <span>L</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>s</span>
            <span>t</span>
            <span className="space"> </span>
            <span>N</span>
            <span>e</span>
            <span>w</span>
            <span>s</span>
          </h2>
        </div>

        <div className="news-items">
          <div className="news-item">
            <img className="news-blog-img" src={newsImg1} alt="News 1" />
            <h3>News Update 01/02/21</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="btn-dark">Read Now</button>
          </div>
          <div className="news-item">
            <img className="news-blog-img" src={newsImg2} alt="News 2" />
            <h3>News Update 01/02/21</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magn.
            </p>
            <button className="btn-dark">Read Now</button>
          </div>
          <div className="news-item">
            <img className="news-blog-img" src={newsImg3} alt="News 3" />
            <h3>News Update 01/02/21</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="btn-dark">Read Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
