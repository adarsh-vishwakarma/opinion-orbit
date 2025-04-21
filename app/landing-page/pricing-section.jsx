import PricingCard from "./pricing-card";


export const pricingPlans= [
  {
    title: "Free",
    price: 0,
    description: "For small teams just getting started",
    isPopular: false,
    url: "/dashboard",
    features: [
      "3 projects",
      "Unlimited users",
      "2GB storage",
      "Priority support",
    ],
  },
  {
    title: "Monthly",
    price: 6.99,
    description: "For growing teams",
    isPopular: true,
    url: "/pricing",
    // url: "/payments/subscribe?plan=monthly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "5GB storage",
      "Priority support",
    ],
  },
  {
    title: "Yearly",
    price: 39.99,
    description: "Upgrade to save more!",
    isPopular: false,
    url: "/payments/subscribe?plan=yearly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "50GB storage",
      "24/7 support",
    ],
  },
]


const PricingSection = () => {
  return (
   
<div className=" py-24 sm:py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Simple pricing, for every stage
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Choose a plan that fits your business. Upgrade anytime as you grow.
      </p>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Starter */}
      <div className="flex flex-col justify-between rounded-2xl bg-gray-900 p-8 ring-1 ring-gray-800 shadow-md hover:scale-105 transition-transform duration-200">
        <div>
          <h3 className="text-lg font-semibold text-white">Starter</h3>
          <p className="mt-4 text-sm text-gray-400">Perfect for individuals and startups.</p>
          <p className="mt-6 text-4xl font-bold text-white">$0<span className="text-base font-medium text-gray-400">/mo</span></p>
        </div>
        <ul className="mt-6 space-y-4 text-sm text-gray-300">
          <li>✓ 100 feedback entries</li>
          <li>✓ Basic analytics</li>
          <li>✓ Email support</li>
        </ul>
        <a href="#" className="mt-8 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white text-center hover:bg-orange-400">
          Get started
        </a>
      </div>

      {/* Pro */}
      <div className="flex flex-col justify-between rounded-2xl bg-orange-500/10 border border-orange-500 p-8 ring-1 ring-orange-500 shadow-lg hover:scale-105 transition-transform duration-200">
        <div>
          <h3 className="text-lg font-semibold text-orange-400">Pro</h3>
          <p className="mt-4 text-sm text-orange-200">Best for growing teams & businesses.</p>
          <p className="mt-6 text-4xl font-bold text-white">$29<span className="text-base font-medium text-orange-200">/mo</span></p>
        </div>
        <ul className="mt-6 space-y-4 text-sm text-orange-100">
          <li>✓ 10,000 feedback entries</li>
          <li>✓ Advanced analytics</li>
          <li>✓ Priority support</li>
          <li>✓ Team collaboration</li>
        </ul>
        <a href="#" className="mt-8 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white text-center hover:bg-orange-400">
          Choose Pro
        </a>
      </div>

      {/* Enterprise */}
      <div className="flex flex-col justify-between rounded-2xl bg-gray-900 p-8 ring-1 ring-gray-800 shadow-md hover:scale-105 transition-transform duration-200">
        <div>
          <h3 className="text-lg font-semibold text-white">Enterprise</h3>
          <p className="mt-4 text-sm text-gray-400">For large scale operations and enterprises.</p>
          <p className="mt-6 text-4xl font-bold text-white">Custom</p>
        </div>
        <ul className="mt-6 space-y-4 text-sm text-gray-300">
          <li>✓ Unlimited feedback</li>
          <li>✓ Custom integrations</li>
          <li>✓ Dedicated manager</li>
          <li>✓ Enterprise-level security</li>
        </ul>
        <a href="#" className="mt-8 inline-block rounded-xl bg-gray-800 px-5 py-3 text-sm font-semibold text-white text-center hover:bg-gray-700">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default PricingSection;