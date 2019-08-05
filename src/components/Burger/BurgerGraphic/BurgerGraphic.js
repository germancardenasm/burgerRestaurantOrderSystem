import React from 'react'
import Ingredient from '../Ingredient/Ingredient'
import './BurgerGraphic.css'

const BurgerGraphic = () => {
    return (
        <div className='burger'>
            <p>This is the burger graphics</p>
            <Ingredient type="bread_top"/>
            <Ingredient type="salad"/>
            <Ingredient type="chesee"/>
            <Ingredient type="bacon"/>
            <Ingredient type="meat"/>
            <Ingredient type="bread_bottom"/>
        </div>
    )
}

export default BurgerGraphic
