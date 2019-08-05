import React from 'react';
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'
import './Ingredient.css'

const ingredient = (props) => {
    let classname = props.type;
    let ingredient= <div className={classname} />;
    return (
        <Aux>
            {ingredient}
        </Aux>
    )
}

ingredient.propTypes = {
    type: PropTypes.string
}

export default ingredient
