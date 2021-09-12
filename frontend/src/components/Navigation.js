import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navigation = () => {
    const cartCount=useSelector(state=>state.cartItems.length)
    const pages=[{
        title:"Shop All",
        link:"/store",
        icon:false
    },{
        title:"Collections",
        link:"/",
        icon:true
    },{
        title:"Colors",
        link:"/cart",
        icon:true
    }]
    const secondaryPages=[{
        title:"About",
        link:"/"
    },{
        title:"Contact",
        link:"/"
    },{
        title:"Journal",
        link:"/"
    }]
    return(
        <nav className="navigation">
            <div className="nav-header">
                <Link to='/'>
                    <img className="logo" src="/images/logo.png" alt="" />
                </Link>
                <span class="cart-icon">
                    <span className="cart-count">3</span>
                    <svg class="svg symbol symbol--cart low-dpi" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H4.85375C3.25513 7 1.93732 8.25356 1.85749 9.85019L1.15749 23.8502C1.07181 25.5637 2.43806 27 4.15375 27H19.8463C21.5619 27 22.9282 25.5637 22.8425 23.8502L22.1425 9.85019C22.0627 8.25356 20.7449 7 19.1463 7H17M7 7V5C7 2.79086 8.79086 1 11 1H13C15.2091 1 17 2.79086 17 5V7M7 7H17" stroke="black" stroke-width="1.5"></path></svg>
                </span>
            </div>
            <ul className="nav-list-primary">
                {pages.map((page,index)=>(
                    <li className="nav-list-item-box" key={index}>
                        <Link className="nav-list-item" to={page.link} >
                            <span className="nav-list-item-text">{page.title}</span>
                            {page.icon&&<i class="fas fa-chevron-right"></i>}
                            {page.title==="CART"?<span className="cart-count">{cartCount}</span>:""}
                        </Link>
                    </li>
                ))}
              
            </ul>
            <ul className="nav-list-secondary light">
                  {secondaryPages.map((page,index)=>(
                    <li className="nav-list-item-box" key={index}>
                        <Link className="nav-list-item" to={page.link} >
                            <span className="nav-list-item-text">{page.title}</span>
                            <i class="fas fa-chevron-right"></i>
                            {page.title==="CART"?<span className="cart-count">{cartCount}</span>:""}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navigation