import React from 'react'
import Discount from './Common/Discount/Discount'
import Stars from './Common/RatingStars/Stars'
import Button from './Common/Button/Button'

type ProductCardProps = {
    id: number,
    title: string,
    description: string,
    imgcaption: string,
    highlights: string | {id:number,highlight:string,number:number}[],
    bestChoice?: boolean,
    bestValue?: boolean,
    rating: number,
    remark: string,
    stars: number,
    discount?: string | null,
    advantages?: string[] | null,
}

const ProductCard:React.FC<ProductCardProps> = ({id,title,description,imgcaption,highlights,bestChoice,bestValue,rating,remark,stars,discount,advantages}) => {
  return (
    <div className='product-card'>
        <span className='prod-id'>{id}</span>
        {
            bestChoice && (<div className='flag'>
                <img src='/images/body/diamond.svg' alt=''/>
                <p>Best Choice</p>
            </div>)
        }
        {
            bestValue && (<div className='flag'>
                <img src='/images/body/trophy.svg' alt=''/>
                <p>Best Value</p>
            </div>)
        }
        <figure className='prod-image'>
            <img src='/images/common/monitor.png' alt=''/>
            <figcaption>{imgcaption}</figcaption>
        </figure>
        <div className='prod-detail'>
            <p className='prod-desc'>
                <span className='prod-title'>{title}</span>
                {description}
            </p>
            {
                discount && <Discount text={discount}/>
            }
            <h5 className='highlight-heading'>Main highlights</h5>
            <div className="prod-highthlights">
                {
                    typeof highlights === 'string' ? (
                        <p className='prod-string-highlights'>{highlights}</p>
                    ) : (
                        <ul className='prod-list-highlights'>
                            {
                                highlights.map((highlight) => (
                                    <li key={highlight.id}>
                                        <p>{highlight.number}</p>
                                        <p>{highlight.highlight}</p> 
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
            {
                advantages && (
                    <div className='prod-advantages'>
                        <h5>Why we love it</h5>
                        <ul className='prod-list-advantages'>
                            {
                                advantages.map((advantage, index) => (
                                    <li key={index}>
                                        <img src='/images/body/blue-check.svg' alt=''/>
                                        <p>{advantage}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }

            <button className='show-more'>
                <p>Show More</p>
                <img src='/images/body/blue-down.svg' alt='' />
            </button>
        </div>

        <div className='prod-performance'>
            <div className='prod-gonfalon'>
                <div className='i-div'>
                    <img src='/images/body/info.svg' alt=''/>
                </div>
                <p className='rating'>{rating}</p>
                <p className='remark'>{remark}</p>
                <Stars stars={stars} maxStars={5}/>
            </div>
            <Button >View</Button>
        </div>

        
    </div>
  )
}

export default ProductCard