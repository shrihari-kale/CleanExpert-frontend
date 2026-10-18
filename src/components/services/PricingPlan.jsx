import React from 'react'

const plans = [
    {
        title:"Basic Plan",
        price: "₹499",
      features: [
        "1 Bedroom Cleaning",
        "Bathroom Cleaning",
        "Dust Cleaning",],
    },
    {
      title: "Standard Plan",
      price: "₹999",
      features: [
        "2 Bedroom Cleaning",
        "Kitchen Cleaning",
        "Bathroom Cleaning",
        "Sofa Cleaning",
      ],
    },

    {
      title: "Premium Plan",
      price: "₹1999",
      features: [
        "Full Home Deep Cleaning",
        "Kitchen Deep Cleaning",
        "Bathroom Sanitization",
        "Sofa & Carpet Cleaning",
        "Garden Cleaning",
      ],
    },
];





const PricingPlan = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Cleaning Service Pricing Plans</h1>

      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg h-100 text-center p-3">
              <div className="card-body">
                <h2 className="card-title mb-3">{plan.title}</h2>
                <h1 className="text-primary mb-4">{plan.price}</h1>

                <ul className='list-group mb-4'>
                  {plan.features.map((feature, i) => (
                    <li className='list-group-item' key={i}>{feature}</li>
                  ))}
                </ul>

                <button className="btn btn-primary w-100">Choose Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlan;