import about from '../images/about.jpeg'

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            lorem ipsum, dolor sit amet consectetur adipisicing elit. aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            lorem ipsum, dolor sit amet consectetur adipisicing elit. aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
  );
};

export default About;
