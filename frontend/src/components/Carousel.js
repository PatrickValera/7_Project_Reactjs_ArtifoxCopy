import React from 'react'
import { useState,useRef,useEffect } from 'react'
// import CartItem from '../../../src/components/CartItem'

const Carousel = ({item}) => {
    const [current,setCurrent]=useState(0)
    const ref=useRef(null)

    const handleClick=(id)=>{
        setCurrent(id)
    }

    useEffect(() => {
        ref.current.style.transition='all 0.5s cubic-bezier(.06,.42,.3,.86)'
        ref.current.style.transform=`translateX(-${current}00%)`
    }, [current])

    return (
        <>
        <div className="carousel-frame">
            <div  className="carousel-slide" ref={ref}>
                <div className="carousel-item">
                    <img src={item.images.main} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={item.images.sub} alt="" />
                </div>
            </div>
            <div className="carousel-nav">
                <div className="nav-slide">
                    {/* {item.thumbnails.map(image=>(<img src={} alt="thumbnail" className="thumbnail" />))} */}
                    <div className="clickable thumbnail-container" onClick={()=>handleClick(0)}>
                        <img src={item.images.main}  className="thumbnail" alt="" />
                    </div>
                    <div className="clickable thumbnail-container" onClick={()=>handleClick(1)}>
                        <img src={item.images.sub} className="thumbnail" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carousel