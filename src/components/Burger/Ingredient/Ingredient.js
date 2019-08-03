import React from 'react';
import Aux from '../../../hoc/Aux'
import './Ingredient.css'

const ingredient = (props) => {
    let ingredient = null;
    let classname = "bread_bottom"
    ingredient= <div className={classname}>.</div>;
    return (
        <Aux>
            {ingredient}
        </Aux>
       
    )
}

export default ingredient
