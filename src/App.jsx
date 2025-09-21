import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Heading from './components/Heading'
import Para from './components/Para'
import Content from './components/Image_Para'
import Card from './components/card'
import Footer from './components/footer'

function App() {

  return (
    <>
    {/* Nav component */}
     <Nav />
     {/* Hero Component */}
     <Hero />
     {/* Heading */}
     <Heading text = 'Our Clients' align = 'text-center'/>
     {/* Para */}
     <Para text = 'We have been working with some fortune 500+ clients' align = 'text-center'/>
     {/* centent imge + text */}
     <Content />
     <Heading text = 'Our Services' align = 'text-center'/>
     <Card />
     <Heading text = 'How to design your site footer like we did' align = 'text-center'/>
     <Content />
     <Footer />
    </>
  )
}

export default App
