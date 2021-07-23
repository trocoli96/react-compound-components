import './compoundCard.css';
import PropTypes from 'prop-types';


export const CompoundCard = ({title, subtitle, text, img, children}) => {

    return (
        <div className="card_container">
          {img && <img src={img} />}
          <p>hola</p>
          <hr className="divider"/>
          {title && <h3>{title}</h3>}  
          {subtitle && <h4>{subtitle}</h4>}
          {text && <p>{text}</p>}
          <div className="buttons_container">
            {children}
          </div>
        </div>
    )
}

CompoundCard.propTypes = {
  children: PropTypes.element.isRequired,
}