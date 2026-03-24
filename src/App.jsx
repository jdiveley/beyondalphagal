import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import History from './pages/History'
import Symptoms from './pages/Symptoms'
import GlobalStats from './pages/GlobalStats'
import Treatments from './pages/Treatments'
import FoodsToAvoid from './pages/FoodsToAvoid'
import SafeFoods from './pages/SafeFoods'
import Recipes from './pages/Recipes'
import Research from './pages/Research'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/global-stats" element={<GlobalStats />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/foods-to-avoid" element={<FoodsToAvoid />} />
          <Route path="/safe-foods" element={<SafeFoods />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
