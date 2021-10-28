import './MovieDetail.css';
import { useContext, useState } from 'react';
import { CartCtxt } from '../Context/Context';
import ItemCount from '../ItemCount/ItemCount';

const MovieDetail = ({ data }) => {

  const { cart, setCart } = useContext(CartCtxt)

    console.log(cart);

  const [count, setCount] = useState(ItemCount)

  const addToCart = (data) => {

    console.log(data);
      
    // setCart([
    //   ...cart,
    //   data
    // ])
  }


  return (
    <>
      {
        <div key={data.id} className="movieDetail">
          <div className="seccionImg">
            <img className="imgProducto" src={data.poster_path} alt={data.original_title}></img>
          </div>
          <div className='seccionData'>
            <h4 className="nombreProducto">{data.original_title}</h4>
            <h6 className="year">Release Date: {data.release_date}</h6>
            <h6 className="IMDB">{data.vote_average} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount />
            <h5 className="precioProductoDetail">$ {data.vote_count}</h5>
          </div>

        </div>
      }
    </>
  )

}

export default MovieDetail;