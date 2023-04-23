import Title from './Title';
import Tour from './Tour.js';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title text1="featured" text2="tours" />
      <Tour tours={tours} />
    </section>
  );
};

export default Tours;
