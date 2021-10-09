import React from 'react'
import { useState,useRef,useEffect } from 'react'

const Carousel = ({item}) => {
    const [current,setCurrent]=useState(0)
    const ref=useRef(null)
    const handleClick=(slide)=>{
        setCurrent(slide)
    }
    useEffect(() => {
        ref.current.style.transition='all 0.9s cubic-bezier(.06,.42,.3,.86)'
        ref.current.style.transform=`translateX(-${current}00%)`
        // let timeout=setTimeout(()=>{setCurrent((x)=>x!==3?x+1:0)}, 2000);
        // return()=>clearTimeout(timeout)
    }, [current])

    return (
        <>
        <div className="home-carousel1-frame">
            <div  className="home-carousel1-slide" ref={ref}>
                <div className={`home-carousel1-item ${current===0&&"active"}`}>
                    <img src="/images/home/home-black.jpg" alt="" />
                    <div className="slide-card top">
                        <h3 className="slide-title">Back in Black</h3>
                        <p className="slide-subheading">Modular,Minimal and Built to Last</p>
                        <button className="slide-button">Shop Now</button>
                    </div>
                </div>
                <div className={`home-carousel1-item ${current===1&&"active"}`}>
                    <img src="/images/home/home-walnut-table-2.jpg" alt="" />
                    <div className="slide-card top dark">
                        <h3 className="slide-title">The Perfect Desk</h3>
                        <p className="slide-subheading">Modular,Minimal and Built to Last</p>
                        <button className="slide-button">Create Your Workspace</button>
                    </div>
                </div>
                <div className={`home-carousel1-item ${current===2&&"active"}`}>
                    <img src="/images/home/home-bench.jpg" alt="" />
                </div>
                <div className={`home-carousel1-item ${current===3&&"active"}`}>
                    <img src="/images/home/home-table.jpg" alt="" />
                </div>
            </div>
            <div className="dots">
                {[0,1,2,3].map(slide=>(
                    <span className={`dot ${current===slide&&'active'}`} onClick={()=>handleClick(slide)}></span>
                ))}
            </div>
        </div>
        </>
    )
}

export default Carousel