import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getStoreItems} from '../global/actioncreators/storeItemActions'
import {Breadcrumbs,Link } from '@material-ui/core'
import Grid from '../components/Grid'
import Card from '../components/Card'

const Store = () => {
    const dispatch=useDispatch()
    const {storeItems}=useSelector((state)=>state.xxx)
    console.log(storeItems)
    useEffect(()=>{
        dispatch(getStoreItems())
    },[dispatch])

    return (
        <div className="main-store">
            <header>
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                    <Link color="inherit" href="/" className="crumb-text">
                        Home
                    </Link>
                    <span className="crumb-text active">All Artifacts</span>
                </Breadcrumbs>
                <h2>All Artifacts</h2>
                <span>Minimalist products for your home and office</span>
            </header>
            <Grid container xs={12} spacing={1}>
                {storeItems.map(item=>(
                    <Grid item key={item._id} lg={3} xs={6} featured={item.featured}>
                        <Card item={item}/>
                    </Grid>))}
            </Grid>
         
           
        </div>
    )
}

export default Store
