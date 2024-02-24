import React from 'react'
import Discount from './Common/Discount'
import Button from './Common/Button'

type RelatedCardProps = {
    image: string
    discount: string[]
    title: string
    description: string
    price: number
    mrp: number
    dealLink: string
}

const RelatedCard:React.FC<RelatedCardProps> = ({image,discount,title,description,price,mrp,dealLink}) => {
  return (
    <div className='related-card'>
        <div className='image-container'>
            <img src={image} alt='placeholder' />
        </div>

        <div>
            <Discount text={discount[0] || "0"}/>
            <Discount text={discount[1] || "Available"}/>
        </div>
        <div>
            <h4>{title}</h4>
        </div>
        <div>
            <p>{description}</p>
        </div>
        <div>
            <span>${price}</span>
            <span>${mrp}</span>
            <span>({discount[0] || "0% Off"})</span>
        </div>
        <Button className=''>
            View Deal
        </Button>


    </div>
  )
}

export default RelatedCard