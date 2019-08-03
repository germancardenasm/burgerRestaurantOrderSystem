import React from 'react';
import Aux from '../../../hoc/Aux'
import './Ingredient.css'

const ingredient = (props) => {
    let ingredient = null;
    let classname = props.type;
    ingredient= <div className={classname}>.</div>;
    return (
        <Aux>
            {ingredient}
        </Aux>
       
    )
}

export default ingredient
