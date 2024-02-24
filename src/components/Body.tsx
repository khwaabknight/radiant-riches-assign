import Heading from './Body/Heading'
import Services from './Body/Services'
import Products from './Body/Products'
import Location from './Body/Location'
import RelatedDeals from './Body/RelatedDeals'
import SignUp from './Body/SignUp'

const Body = () => {
  return (
    <div className='body-wrapper'>
      <div className='body-container'>
        <Heading />
        <Services />
        <Location />
        <Products />
        <RelatedDeals />
        <SignUp />

      </div>
      
    </div>
  )
}

export default Body