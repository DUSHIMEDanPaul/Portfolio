import React from 'react'
import Hero from '../src/sections/Hero'
import Navbar from '../src/sections/Navbar'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
const App=()=>{
   return(<main className='max-w-7xl mx-auto'>
   <Navbar/>
   <Hero/>
   <About />
   <Projects/>
   <Clients/>
   <Experience/>
   <Contact/>
   <Footer/>
   </main>)
}
export default App