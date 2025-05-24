import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/Bgslider'
import Textimonials from '../components/Textimonials'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Textimonials />
      <Upload />
    </div>
  )
}

export default Home