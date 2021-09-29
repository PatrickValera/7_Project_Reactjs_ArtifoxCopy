import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useRef } from "react"
import { capitalizeFirstLetter } from "../utils"

const Navigation = () => {
    console.log("NAV LOADED")
    const [secondaryRoutes,setSecondaryRoutes]=useState([])
    const [navActive,setNavActive]=useState(false)
    const [navOpen,setNavOPen]=useState(false)
    const secondNavRef=useRef()
    const navContainer=useRef()
    const cartLength=useSelector(state=>state.cartItems.list).length
    const pages=[{
        title:"Shop All",
        link:"/products",
        icon:false
    },{
        title:"Collections",
        link:"/products",
        icon:true,
        secondaryRoutes:["new","desk","shelf","side","lift","table","bench"]
    },{
        title:"Colors",
        link:"/products",
        icon:true,
        secondaryRoutes:["Walnut","White Oak"]
    }]
    const secondaryPages=[{
        title:"About",
        link:"/",
        icon:true,
    },{
        title:"Contact",
        link:"/"
    },{
        title:"Journal",
        link:"/",
        icon:true,

    }]
    const handleOpen=(e,secondaryRoutes)=>{
        secondNavRef.current.classList.remove("hidden")
        setNavActive(true)
        if(secondaryRoutes)setSecondaryRoutes(secondaryRoutes)
    }
    const handleClose=()=>{
        setNavActive(false)
        secondNavRef.current.classList.add("hidden")
    }
    const handleNavClick=()=>{
        setNavOPen(state=>!state)
        navContainer.current.classList.toggle("open")
    }
    return(
        <div className="navigation">

        <div className={`overlay ${navActive&&"dark"}`}></div>
        <nav className="navigation-primary">
                   <span className="open-close-icon" onClick={handleNavClick}>
                    {navOpen?
                    <i className="fas fa-times"></i>:
                    <i className="fas fa-bars"></i>}
                </span>
            <div className="nav-header">
                <Link to='/'>
                    <img className="logo" src="/images/logo.png" alt="" />
                </Link>
                <Link to='/cart'>
                    <span className="cart-icon">
                    <span className="cart-count">{cartLength}</span>
                    <svg className="svg symbol symbol--cart low-dpi" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7H4.85375C3.25513 7 1.93732 8.25356 1.85749 9.85019L1.15749 23.8502C1.07181 25.5637 2.43806 27 4.15375 27H19.8463C21.5619 27 22.9282 25.5637 22.8425 23.8502L22.1425 9.85019C22.0627 8.25356 20.7449 7 19.1463 7H17M7 7V5C7 2.79086 8.79086 1 11 1H13C15.2091 1 17 2.79086 17 5V7M7 7H17" stroke="black" strokeWidth="1.5"></path>
                    </svg>
                    </span>
                </Link>
         

            </div>
            <div className="nav-list-container" ref={navContainer}>
                <ul className="nav-list-primary">
                    {pages.map((page,index)=>(
                        <li className="nav-list-item-box" 
                            onMouseOver={page.secondaryRoutes?(e)=>handleOpen(e,page.secondaryRoutes):(e)=>handleClose(e)} 
                            onMouseLeave={handleClose} key={index}>
                            <Link className="nav-list-item" to={page.link} >
                                <span className="nav-list-item-text">{page.title}</span>
                                {page.secondaryRoutes&&<i className="fas fa-chevron-right"></i>}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="nav-list-secondary light">
                    {secondaryPages.map((page,index)=>(
                        <li className="nav-list-item-box" key={index}>
                            <Link className="nav-list-item" to={page.link} >
                                <span className="nav-list-item-text">{page.title}</span>
                                {page.icon&&<i className="fas fa-chevron-right"></i>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        <nav className="navigation-secondary hidden" ref={secondNavRef}
            onMouseOver={(e,secondaryRoutes)=>handleOpen(secondaryRoutes)} 
            onMouseLeave={handleClose}>
            <ul className="nav-list-primary">
                {secondaryRoutes.map((link,index)=>(
                    <li className="nav-list-item-box" key={index}>
                        <Link className="nav-list-item" to={`/products/${link}`}>
                            <span className="nav-list-item-text">{capitalizeFirstLetter(link)}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
}
export default Navigation