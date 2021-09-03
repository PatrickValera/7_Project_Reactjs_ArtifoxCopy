import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navigation = () => {
    const cartCount=useSelector(state=>state.cartItems.length)
    const pages=[{
        title:"HOME",
        link:'/'
    },{
        title:"SHOP ALL",
        link:"/store"
    },{
        title:"CART",
        link:"/cart"
    }]
    return(
        <nav className="navigation">
            <div className="nav-header">
                <Link to='/'><h2 style={{paddingLeft:'30px'}}>ARTYFACTS</h2></Link>
            </div>
            <ul className="nav-list">
                {pages.map((page)=>(
                    <li className="nav-list-item-box">
                        <Link className="nav-list-item" to={page.link}>
                            <span className="nav-list-item-text">{page.title}</span>
                            {page.title==="CART"?<span className="cart-count">{cartCount}</span>:""}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navigation