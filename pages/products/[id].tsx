import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
    const router = useRouter()
    const id = router.query.id
    return (
        <h1>ProductDetail</h1>
    )
}

export default ProductDetail