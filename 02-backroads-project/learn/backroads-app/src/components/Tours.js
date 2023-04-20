import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'
import Title from './Title';

const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title text1="featured" text2="tours"/>
      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour1} className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>tibet adventure</h4>
            </div>
            <p>
              lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour2} className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>best of java</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour3} className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>explore hong kong</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour4} className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2019</p>
          </div>
          <div className="tour-info">
            <h4>kenya highlights</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tours;
