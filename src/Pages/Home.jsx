import React from 'react'
import Hero from '../Component/Hero'
import Features from '../Component/Features'
import UseCases from '../Component/UseCases'
import PricingAndIntegrations from '../Component/PricingAndIntegrations'
import Contact from '../Component/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <UseCases/>
        <PricingAndIntegrations/>
        <Contact/>
    </div>
  )
}

export default Home