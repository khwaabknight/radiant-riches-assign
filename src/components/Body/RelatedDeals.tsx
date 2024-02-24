import React from 'react'
import RelatedCard from './RelatedCard'

const cardData = [
  {
    id:1,
    image: 'images/common/monitor.png',
    discount: ['20% Off', 'Limited time'],
    title: "Webbuilder1",
    description: "Computer  Modern clasic with wix support",
    price: 39.96,
    mrp: 49.96,
    dealLink: "#",
  },
  {
    id:2,
    image: 'images/common/monitor.png',
    discount: ['20% Off', 'Limited time'],
    title: "Webbuilder1",
    description: "Computer  Modern clasic with wix support",
    price: 39.96,
    mrp: 49.96,
    dealLink: "#",
  },
  {
    id:3,
    image: 'images/common/monitor.png',
    discount: ['20% Off', 'Limited time'],
    title: "Webbuilder1",
    description: "Computer  Modern clasic with wix support",
    price: 39.96,
    mrp: 49.96,
    dealLink: "#",
  },
]

const RelatedDeals = () => {
  return (
    <div className='related-deals'>
      <h3>Related deals you might like for</h3>
      <br />
      <div className='related-card-container'>
        {cardData.map((card) => {
          return (
            <RelatedCard
              key={card.id}
              image={card.image}
              discount={card.discount}
              title={card.title}
              description={card.description}
              price={card.price}
              mrp={card.mrp}
              dealLink={card.dealLink}
            />
          )
        })}
      </div>

    </div>
  )
}

export default RelatedDeals