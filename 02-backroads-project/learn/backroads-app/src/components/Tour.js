const Tour = ({ tours }) => {
  return (
    <div className="section-center featured-center">
      {tours.map(tour =>
        <article key={tour.id} className="tour-card">
          <div className="tour-img-container">
            <img src={tour.img} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title"> <h4>{tour.title}</h4> </div>
            <p> {tour.summary} </p>
            <div className="tour-footer">
              <p> <span><i className="fas fa-map"></i></span>{' '}{tour.destination}</p>
              <p>{tour.duration} days</p>
              <p>from ${tour.price}</p>
            </div>
          </div>
        </article>)}
    </div>
  )
}

export default Tour;
