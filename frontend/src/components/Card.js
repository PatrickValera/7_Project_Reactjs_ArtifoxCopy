import React from 'react'
import { capitalizeFirstLetter } from '../utils'
import { Link } from 'react-router-dom'
const Card = ({item,loading}) => {

    return (
        <Link to={`/product/${item._id}`}>
        <div className="card">
            <div className="card-image-container">
                <div className="image-figure">
                    {loading?  <i class="fas fa-circle-notch fa-spin"></i>:
                    <>
                        <img src={item.images.sub} alt="" className="image sub" />
                        <img src={item.images.main} alt="" className="image" />
                    </>}

                </div>
            </div>
            <div className="card-detail">
                <div className="name">{capitalizeFirstLetter(item.name)}{item.colors.length>0?` - ${item.colors[0]}`:""}</div>
                <span className="price">${item.price.toLocaleString()}</span>
            </div>
        </div>
        </Link>
    )
}

Card.defaultProps = {
    item:{
            _id:1111,
            name:"n/a",
            images:{
                sub:'/',
                main:'/'
            },
            price:0,
            tag:["n/a"]
        }
}
export default Card
