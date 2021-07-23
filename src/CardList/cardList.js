import React from 'react';
import PropTypes from 'prop-types';
import "./cardList.css";


export const CardList = ({title, children}) => {

    return (
        <div>
            <h2>{title}</h2>
            <div className="cards_container">
                {children}
            </div>
        </div>
    )
}

CardList.propTypes = {
    children: PropTypes.element.isRequired,
}