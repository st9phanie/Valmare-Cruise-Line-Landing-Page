import { Navbar } from './components/Navbar'
import { PromotionSignUp } from './components/parts/PromotionSignUp'
import { Search } from './components/parts/Search'
import { Destinations } from './components/sections/Destinations'
import { Featured } from './components/sections/Featured'
import { Hero } from './components/sections/Hero'
import { Offers } from './components/sections/Offers'
import { WhyUs } from './components/sections/WhyUs'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Search />
     <Featured />
    <Offers />
    <PromotionSignUp />
    <Destinations />
    <WhyUs />
    </>
  )
}

export default App
