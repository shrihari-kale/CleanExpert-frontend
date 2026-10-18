import React from 'react'
import ServicesCard from './ServicesCard'
import PricingPlan from './PricingPlan'
import Footer from '../Footer'
// import BookingForm from '../BookingForm'

const ServicesPage = () => {
  return (
    <div>
        <ServicesCard/>
        <PricingPlan/>
        {/* <BookingForm/> */}
        <Footer/>
    </div>
  )
}

export default ServicesPage;