import React from 'react'
import { capitalizeFirstLetter } from '../utils'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
    return (
        <div className="card">
            <div className="card-image">
                <Link style={{position:'absolute'}} to={`/store/${item.id}`}>LINK</Link>
            </div>
            <div className="card-detail">
                <h3 className="name">{capitalizeFirstLetter(item.name)}</h3>
                <span className="price">${item.price}</span>
            </div>
        </div>
    )
}

export default Card
