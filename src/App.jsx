import { Navbar } from './components/Navbar'
import { Search } from './components/parts/Search'
import { Featured } from './components/sections/Featured'
import { Hero } from './components/sections/Hero'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Search />
     <Featured />

    </>
  )
}

export default App
