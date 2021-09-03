import React from 'react'

const ProductPage = ({match}) => {
    return (
        <div>
            Product Page
            {match.params.id}
        </div>
    )
}

export default ProductPage
