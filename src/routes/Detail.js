import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Point from "../components/Point"

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(response => response.json())
      .then(json => {
        setData(json.data.movie);
        setLoading(false);
      })
  }, []);
  console.log(data);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Point
          background_image_original={data.background_image_original}
          medium_cover_image={data.medium_cover_image}
          url={data.url}
          title_long={data.title_long}
          rating={data.rating}
          runtime={data.runtime}
          genres={data.genres}
          download_count={data.download_count}
        />
      )}
    </div>
  );
}
export default Detail;