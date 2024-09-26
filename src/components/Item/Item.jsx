import "./Item.css"
import { Link } from "react-router-dom";



const Item = ( {title, img, price, category, dues, id, tag, stock} ) => {

    return(
        <article className="item">
            <Link to={`/details/${id}`}>
                <picture className="item__picture">
                    <span className="item__picture--pill">{tag}</span>
                    <img className="item__picture--img" src={img} alt={title} />
                </picture>
                <div className="item__info">
                    <h3 className="item__info--title">{category}</h3>
                    <h4 className="item__info--item">{title}</h4>
                    <p className="item__info--price">${price}</p>
                    <p className="item__info--dues">{dues} Cuotas sin interés</p>
                </div>
            </Link>
        </article>
    );
};

export default Item;
