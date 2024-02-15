import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSection from './LocationSection'
import AboutUs from './AboutUs'
import PlaystoreSection from './PlaystoreSection'
import Sponsors from './Sponsors'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSection/>
      <AboutUs/>
      <PlaystoreSection/>
      <Sponsors/>
    </div>
  )
}

export default Home