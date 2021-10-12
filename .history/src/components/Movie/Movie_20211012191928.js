import './Movie.css';
import ItemCount from '../ItemCount/ItemCount';
import {LinkContainer} from 'react-router-bootstrap';

const Movie = ({data}) => {
  return (
    <>
      {
        <LinkContainer to={"/:data.id"}>
          <div key={data.id} className="card">
            <img className="imgProducto" src={data.poster_path} alt={data.original_title}></img>
            <h4 className="nombreProducto">{data.original_title}</h4>
            <h6 className="year">Release Date: {data.release_date}</h6>
            <h6 className="IMDB">{data.vote_average} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount />
            <h5 className="precioProducto">$ {data.vote_count}</h5>
          </div>
        </LinkContainer>

      }
    </>
  )

}

export default Movie;