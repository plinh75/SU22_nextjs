import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className='bg-pink-300 flex py-3'>
            <li><Link href="/" className=''><a className='text-white inline-block'>HomePage</a></Link></li>
            <li><Link href="/products"><a className='text-white inline-block'>Product</a></Link></li>
            <li><Link href="/about"><a className='text-white inline-block'>About</a></Link></li>
            <li><Link href="/contact"><a className='text-white inline-block'>Contact</a></Link></li>
        </ul>
    </div>
  )
}

export default Header