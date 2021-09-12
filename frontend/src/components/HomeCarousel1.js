import React from 'react'
import { useState,useRef,useEffect } from 'react'
// import CartItem from '../../../src/components/CartItem'

const Carousel = ({item}) => {
    const [current,setCurrent]=useState(0)
    const ref=useRef(null)

    const prev = () =>{
        if(current===0)return
        else setCurrent(current-1)
    }
    const next = () =>{
    if(current>=3)return
    else setCurrent(current+1) 
    }

    useEffect(() => {
        ref.current.style.transition='all 0.5s cubic-bezier(.06,.42,.3,.86)'
        ref.current.style.transform=`translateX(-${current}00%)`
    }, [current])

    return (
        <>
        <div className="home-carousel1-frame">
            <div  className="home-carousel1-slide" ref={ref}>
               <div className="home-carousel1-item">
                    <img src="/images/home/home-walnut-table-1.png" alt="" />
                </div>
                <div className="home-carousel1-item">
                    <img src="/images/home/home-walnut-table-2.jpg" alt="" />

                </div>
                <div className="home-carousel1-item">
                    <img src="/images/home/home-bench.jpg" alt="" />
                </div>
                <div className="home-carousel1-item">
                    <img src="/images/home/home-table.jpg" alt="" />

                </div>
            </div>
            <button className="prev button" onClick={prev}>{`<`}</button>
            <button className="next button"onClick={next}>{`>`}</button>
        </div>
        </>
    )
}

export default Carousel