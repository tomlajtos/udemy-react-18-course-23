import Title from './Title';
import Tour from './Tour.js';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title text1="featured" text2="tours" />
      <div className="section-center featured-center">
        {tours.map(tour =>
          <Tour key={tour.id} {...tour} />
        )}
      </div>
    </section>
  );
};

export default Tours;
