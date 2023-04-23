import Title from "./Title";
import Service from "./Service";
import { services } from "../data.js"

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title text1="our" text2="services" />
      <Service services={services} />
    </section>
  );
};

export default Services;
