import React from 'react';

const CarouselRadioButton = (props) => {
    return(
        <li
            className={`carousel__radio-button --${props.active ? "active" : "disabled"}-radio`}
            value={props.value}
            onClick={props.onClick}
        />
    );
}

export default CarouselRadioButton;