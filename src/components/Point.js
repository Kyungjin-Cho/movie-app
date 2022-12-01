import PropTypes from "prop-types";
import styles from '../css/Point.module.css';

function Point({ medium_cover_image, title_long, rating, runtime, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title_long} />
      <h2>
        {title_long}
      </h2>
      <ul>
        <label>Genre:</label>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>Rating: {rating}</p>
      <p>Runtime : {runtime}</p>
    </div>
  );
}

Point.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.string.isRequired
}

export default Point;