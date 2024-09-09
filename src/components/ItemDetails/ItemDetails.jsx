import "./ItemDetails.css"

const ItemDetails = ({ title, img, price, category }) => {
    
    
    return(
        <section className="item-details">
            <picture className="item-details__picture">
                <img className="item-details__picture--img" src={img} alt="" />
            </picture>
            <article className="item-details__info">
                <h2 className="item-details__info--title">{title}</h2>
                <h3 className="item-details__info--price">Precio ${price}</h3>
                <p>{category}</p>
            <form action="">
                <button>Agregar al carrito</button>
            </form>
            </article>
        </section>
    );
};

export default ItemDetails;