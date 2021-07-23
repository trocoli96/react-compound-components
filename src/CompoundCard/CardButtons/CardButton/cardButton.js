import PropTypes from 'prop-types';
import './cardButton.css';




export const CardButton = ({name, handleAction}) => {

    return (
        <button onClick={handleAction} className="button">
            {name}
        </button>
    )
}

CardButton.propTypes = {
    name: PropTypes.string,
    handleAction: PropTypes.func,
}

