import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import { capitalizeFirstLetter } from '../utils'
import {getStoreItems} from '../global/actioncreators/storeItemActions'
import Grid from '../components/Grid'
import Card from '../components/Card'

const Store = () => {
    const dispatch=useDispatch()
    const {storeItems}=useSelector((state)=>state.xxx)
    console.log(useSelector((state)=>state))

    useEffect(()=>{
        dispatch(getStoreItems())
    },[dispatch])
    // console.log(storeItems)
    return (
        <div className="main-store">
            <Grid container xs={12} spacing={1}>
                {storeItems.map(item=>(
                    <Grid item key={item._id} lg={3} xs={6} className="store-item">
                        <Card item={item}/>
                    </Grid>))}
            </Grid>
         
           
        </div>
    )
}

export default Store
