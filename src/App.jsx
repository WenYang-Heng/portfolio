import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Navbar from './components/Navbar'



function App() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addRefs = (el) => {
    if(el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      })
    }), { threshold: 0.5 });

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => {
      sectionRefs.current.forEach((section) => {
        observer.unobserve(section);
      })
    }
    
  })
  return (
    <>
      <Navbar activeSection={activeSection} />
      <div id='main-container' className='mx-4 md:w-[80%] md:m-auto text-gray max-w-5xl text-lg'>
        {/* Background */}
        <div
          className="absolute -z-10 inset-0 w-full
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]
          [mask-image:linear-gradient(to_bottom,transparent_0%,#01050B_25%,#01050B_80%,transparent_100%)]"
        ></div>
        {/* Main Banner */}
        <section ref={addRefs} id='home' className='py-52 grid md:grid-cols-2 gap-8 items-center h-screen animate-fadeinup'>
          <div>
            <p className='leading-none text-gray-light'>Hello, I'm</p>
            <h1 className='text-5xl font-bold text-primary'>Wen Yang</h1>
            <p className='mt-2 text-gray-light'>A software engineering student looking internship opportunites. I have good work ethic and is always willing to learn new technologies.</p>
            <button className='bg-primary mt-2 px-4 py-1 rounded-sm text-gray-light'>View CV</button>
          </div>
          <Experience />
        </section>

        {/* About Me */}
        <div className='flex flex-col gap-24'>
          {/* Skills */}
          <section ref={addRefs} id='skills'>
            <Skills />
          </section>
          {/* Projects */}
          <section ref={addRefs} id='projects'>
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
