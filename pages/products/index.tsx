import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductsProps = {
  products: any[]
}

//client
const ProductPage = ({ products }: ProductsProps) => {
  console.log('product', products);
  if (!products) return null
  return (
    <div>
      {products.map((item) => (
        <div key={item._id}><Link href="">{item.name}</Link></div>
      ))}
    </div>
  )

}


//server
export const getStaticProps: GetStaticProps<ProductsProps> = async (
  context: GetStaticPropsContext //chạy đầu tiên khi vào trang web
) => {
  const data = await (await fetch(`http://localhost:8080/api/product`)).json()
  console.log('data', data);
  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      products: data
    }
  }

}

export default ProductPage