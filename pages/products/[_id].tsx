import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
    product: any
}

const ProductDetail = ({product}: ProductProps) => {
    if(!product) return null
    return (
        <h1>ProductDetail: {product.name}</h1>
    )
}

//trang web cần SEO thì dùng GetStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await (await fetch(`http://localhost:8080/api/product`)).json()
    const paths = data.map((item:any) => {
        return { params: { _id: item._id } }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (
    context: GetStaticPropsContext
) => {
    console.log('get static props');
    console.log('context', context.params?._id);
    //call api
    const data = await (await fetch(`http://localhost:8080/api/product/${context.params?._id}`)).json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props:{
            product:data
        }
    }
}

export default ProductDetail