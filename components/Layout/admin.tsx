import React from 'react'
import { LayoutProps } from '../../models/layout'

const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div className='grid grid-cols-[200px,auto]'>
        <div>
            sidebar
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default LayoutAdmin