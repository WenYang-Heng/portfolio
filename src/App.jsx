import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div id='main-container' className='w-[60%] m-auto'>
        {/* Main Banner */}
        <section>
          <p>Hello, I'm</p>
          <h1 className='text-5xl font-bold text-primary'>Wen Yang</h1>
          <p>A software engineering student looking internship opportunites. I have good work ethic and is always willing to learn new technologies.</p>
          <button className='bg-primary px-4 py-2 rounded-sm font-bold'>View CV</button>
        </section>

        {/* About Me */}
        <section>
          <Header title={"About Me"}/>
          <p>I’m Heng Wen Yang, a second year software engineering student from Universiti Malaya. I have good work ethic and is always willing to learn new technologies. </p>
        </section>

        {/* Skills */}
        <Skills />
      </div>
    </>
  )
}

export default App
