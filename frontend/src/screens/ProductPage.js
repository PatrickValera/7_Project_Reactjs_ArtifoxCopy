import React,{useEffect} from 'react'
import Carousel from '../components/Carousel'
import {Grid} from '@material-ui/core'
import { getItem } from '../global/actioncreators/storeItemActions'
import {Box, Typography} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import Accordions from '../components/Accordions'
import { addToCart } from '../global/actioncreators/cartItemsActions'
import { Breadcrumbs } from '@material-ui/core'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { forwardRef } from 'react'

const ProductPage = ({match}) => {
    const dispatch = useDispatch();
    const {product,loading}=useSelector(state=>state.itemDetails)
    useEffect(()=>{
        dispatch(getItem(match.params.id))
        window.scrollTo({top:0})
    },[dispatch,match])
    const clickHandler=(id)=>{
        dispatch(addToCart(id,1))
    }
    const handleNavClick=(id)=>{
        const element=document.getElementById(id)
        if(element){
            const links=document.querySelectorAll(".nav-button")
            links.forEach(x=>{
                x.classList.remove("active")
                if(x.textContent.toLowerCase()===id)x.classList.add("active")
            })
            const elementPosition=element.getBoundingClientRect().top
            window.scrollTo({top:elementPosition-80-document.body.getBoundingClientRect().top,behavior:"smooth"})
        }
    }
    return (
        <>
        {loading?
        <div className="spinner-container">
            <i class="fas fa-circle-notch fa-spin"></i>
        </div>:
        <div className="product-page">
        <Grid xs={12} container className="main-details">
        <Grid item  sm={12} md={4} lg={4} xl={3}className="product-info">
            <div className="sticky-container">
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                    <Link color="inherit" to="/" className="crumb-text">
                        <span>Home</span>
                    </Link>
                    <Link color="inherit" to="/products" className="crumb-text">
                        <span>All artifacts</span>
                    </Link>
                    <span className="crumb-text active">{product.name}</span>
                </Breadcrumbs>
                <h3 className="name">{`${product.name}${product.colors.length>0?` - ${product.colors[0]}`:""}`}</h3>
                <Box component="fieldset" mb={3} borderColor="transparent" className="rating">
                    <Rating name="read-only" value={4} readOnly size='small' />
                    <span>test reviews</span>
                </Box>
                <span className="price">{product.price.toLocaleString()}</span>
                <div className="form-product-variant">
                {/* test options code below */}
                {product.options&&
                    product.options.map(x=>(
                    <>  
                        <label htmlFor="">{x.name}</label>
                        <select name="" id="">
                            {x.choices.map((x)=>(
                            <option value={x} className="option">{x}</option>
                            ))}
                        </select>
                    </>))
                }   
                </div>
                <button className="clickable checkout-button" onClick={()=>clickHandler(product._id)}>Add to cart</button>
                <Typography variant="subtitle2" className="affirm-link">{`Starting at $${(product.price/12).toFixed(0)}/mo with `}<b>affirm</b>. <a href="/">Learn more</a></Typography>
                <Typography variant="subtitle2" className="shipping-text"><em>Now Shipping</em></Typography>
                {product.details&&<Accordions details={product.details}/>}
        </div>
        </Grid>
        <Grid item sm={12} md={8} lg={8} xl={9} className="gallery">
            <Carousel item={product}/>
        </Grid>
        </Grid>
        <nav className="page-nav">
            <div className={`nav-button`} onClick={()=>handleNavClick("details")}>Details</div>
            <div className={`nav-button`} onClick={()=>handleNavClick("quality")}>Quality</div>
            <div className={`nav-button`} onClick={()=>handleNavClick("collection")}>Collection</div>
        </nav>
        <div className="details" id="details">
            <video src={product.video&&product.video} autoPlay muted loop></video>
        </div>
        {product.quality&&
            <div className="quality" id="quality">
                <div className="quality-container">
                    <div className="quality-list">
                        {product.quality.qualities.map(x=>(
                        <div className="wrapper">
                            <div className="image-container">
                                <img src={x.image} alt="" />
                            </div>
                            <div className="text-container">
                                <h3 className="title">{x.title}</h3>
                                <p className="subheading">{x.subheading}</p>
                            </div>
                        </div>
                    ))}         
                    </div>
                    
                </div>
                <div className="quality-image">
                    <img src={product.quality.image} alt="" />
                </div>
            </div>
        }
        <div className="collection" id="collection">
        </div>
        </div>}
        </>
    )
}

export default ProductPage
