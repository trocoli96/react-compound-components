import './card.css';


export const Card = ({title, subtitle, text, img}) => {

    return (
        <div className="card_container">
          {img && <img src={img} />}
          <p>hola</p>
          <hr className="divider"/>
          {title && <h3>{title}</h3>}  
          {subtitle && <h4>{subtitle}</h4>}
          {text && <p>{text}</p>}
          <div className="buttons_container">
            <button className="button">
                Comprar ahora
            </button>
            <button className="button">
                Favorito
            </button>
          </div>
        </div>
    )
}