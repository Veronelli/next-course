import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const {query} = useRouter();

    return <div>Esta es la pagina del producto: {query.id}</div>
}

export default ProductItem