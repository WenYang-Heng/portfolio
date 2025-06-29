import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <div id='main-container' className='w-[60%] m-auto text-gray max-w-5xl text-lg'>
        {/* Main Banner */}
        <section id='banner' className='py-52 grid grid-cols-2 gap-4 items-center'>
          <div>
            <p className='leading-none'>Hello, I'm</p>
            <h1 className='text-5xl font-bold text-primary'>Wen Yang</h1>
            <p className='mt-2'>A software engineering student looking internship opportunites. I have good work ethic and is always willing to learn new technologies.</p>
            <button className='bg-primary mt-2 px-4 py-1 rounded-sm'>View CV</button>
          </div>
          <Experience />
        </section>

        {/* About Me */}
        <div className='flex flex-col gap-12'>
          {/* <section id='about'>
            <Header title={"About Me"}/>
            <p>I’m Heng Wen Yang, a second year software engineering student from Universiti Malaya. I have good work ethic and is always willing to learn new technologies. </p>
          </section> */}
          {/* Skills */}
          <Skills />
          {/* Projects */}
          <section id='projects'>
            <Header title={"Projects"}/>
            <Projects />
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
