import Title from "./Title";
import Service from "./Service";
import { services } from "../data.js"

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title text1="our" text2="services" />
      <div className="section-center services-center">
        {services.map(service =>
          <Service key={service.id} {...service} />
        )}
      </div>
    </section>
  );
};

export default Services;
