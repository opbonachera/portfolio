import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import Navbar from '@/components/Navbar'
import Main from '@/components/Home'
import Projects from '@/components/Projects'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
    </> 
  )
}
