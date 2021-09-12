import React from 'react'
import { useRef,useEffect } from 'react'
import PropTypes from 'prop-types'

const Grid = ({container,item,xs,lg,spacing,children,featured}) => {
    const ref=useRef(null)


    useEffect(() => {
        // console.log(ref)
        spacing&&ref.current.classList.add(`spacing-${spacing}`)
        xs&&ref.current.classList.add(`xs-${xs}`)
        lg&&ref.current.classList.add(`lg-${lg}`)
        featured&&ref.current.classList.add('featured')
        if(container&&xs){
            ref.current.style.width=`${(xs/12)*100}%`;
        }
    })
    return (
        <div ref={ref} className={`${container?'grid_container':item?'grid_item':'grid_container'}`}>
            {children}
        </div>
    )
}

Grid.propTypes={
    container:PropTypes.bool,
    item:PropTypes.bool,
    xs:PropTypes.number,
    lg:PropTypes.number,
    featured:PropTypes.bool
}
Grid.defaultProps = {
  featured: false
};
export default Grid
