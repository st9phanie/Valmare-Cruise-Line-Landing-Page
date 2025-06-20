import { Navbar } from './components/Navbar'
import { PromotionSignUp } from './components/parts/PromotionSignUp'
import { Search } from './components/parts/Search'
import { Destinations } from './components/sections/Destinations'
import { Featured } from './components/sections/Featured'
import { Hero } from './components/sections/Hero'
import { Offers } from './components/sections/Offers'
import { WhyUs } from './components/sections/WhyUs'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="justify-center flex flex-col">
      <Navbar />
      <Hero />
      <Search />
      <Featured />
      <Offers />
      <PromotionSignUp />
      <Destinations />
      <WhyUs />
      <Footer />
    </div>

  )
}

export default App
