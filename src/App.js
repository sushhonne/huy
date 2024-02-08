import React from 'react'
import Banner from './components/home/Banner'
import About from './components/home/About'
import WhatWeDo from './components/home/WhatWeDo'
import Mouse from './components/home/Mouse'


export default function App() {
  return (
    <div>
      <Banner/>
      <About/>
      {/* <WhatWeDo/> */}
      <Mouse/>
    </div>
  )
}
