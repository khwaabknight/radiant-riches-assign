import React from 'react'

type StarsProps = {
    stars: number
    maxStars: number
}

const Stars:React.FC<StarsProps> = ({stars,maxStars}) => {
  
  const totalStars = maxStars;
  const filledStars = Math.floor(stars);
  const starsArray = [];
  let i = 0

  for(; i < filledStars; i++){
    starsArray.push(<img src='/images/body/fill-star.svg' alt=''/>)
  }
  if(stars % 1 !== 0){
    starsArray.push(<img src='/images/body/half-star.svg' alt=''/>)
    i++;
  }
  for(; i < totalStars; i++){
    starsArray.push(<img src='/images/body/empty-star.svg' alt=''/>)
  }

  return (
    <div className='stars'>{starsArray}</div>
  )
}

export default Stars