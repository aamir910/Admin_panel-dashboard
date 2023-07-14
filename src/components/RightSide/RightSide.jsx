import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../customer/customerReview'
const RightSide = () => {
  return (
    <div className='Rightside'>


      <div className="updatesMain">
        <h3>Updates</h3>


        <Updates />
      </div>
      <div className="review">


      </div>

      <div className="customers">
        <h3>
          Customer review
        </h3>


           <CustomerReview/>
      </div>
    </div>
  )
}

export default RightSide
