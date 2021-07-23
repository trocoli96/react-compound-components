import './cardButtons.css';
import PropTypes from 'prop-types';



export const CardButtons = ({ children }) => {

    return (
        <div className="buttons_container">
            {children}
        </div>
    )
}

CardButtons.propTypes = {
    children: PropTypes.elementType.isRequired
}
