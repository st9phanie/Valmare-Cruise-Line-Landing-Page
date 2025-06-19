import { Navbar } from './components/Navbar'
import { Search } from './components/parts/Search'
import { Featured } from './components/sections/Featured'
import { Hero } from './components/sections/Hero'
import { Offers } from './components/sections/Offers'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Search />
     <Featured />
    <Offers />
    </>
  )
}

export default App
