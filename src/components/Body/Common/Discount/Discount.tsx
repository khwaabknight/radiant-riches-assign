import React from 'react'
import './discount.scss'

type DiscountProps = {
  text: string
}

const Discount : React.FC<DiscountProps> = ({text}) => {
  return (
    <span className='discount'>{text}</span>
  )
}

export default Discount