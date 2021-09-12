import React from 'react'
import { capitalizeFirstLetter } from '../utils'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
    // console.log(item._id)
    return (
           <Link to={`/store/${item._id}`}>
        <div className="card">
            <div className="card-image-container">
                <div className="image-figure">
                    <img src={item.images.sub} alt="" className="image sub" />
                
                    <img src={item.images.main} alt="" className="image" />
                </div>
            </div>
            <div className="card-detail">
                <h3 className="name">{capitalizeFirstLetter(item.name)}</h3>
                <span className="price">${item.price.toLocaleString()}</span>
            </div>
        </div>
             </Link>
    )
}

export default Card
