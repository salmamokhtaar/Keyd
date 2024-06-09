import React from 'react'
import Banner from '../components/Banner'
import BestSelerBooks from "./BestSelerBooks"
import FavoriteBook from './FavoriteBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
function Home() {
  return (
    <div className=''>
     <Banner/>
     <BestSelerBooks/>
     <FavoriteBook/>
     <PromoBanner/>
     <OtherBooks/>
     <Review/>
    </div>
  )
}

export default Home