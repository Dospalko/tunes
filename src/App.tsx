import { NavLink, Route, Routes } from "react-router-dom"
import TheNavigation from "./components/TheNavigation"
import About from "./pages/About"
import Home from "./pages/Home"
import Tunes from "./pages/Tunes"
import './index.css'
function App() {


  return (
    <div className="App">
      <header className="flex flex-row flex-wrap mx-auto justify-center items-center mt-4 border-solid border-2 w-60 rounded-full">
        <TheNavigation />
      </header>
      <hr className="my-4 w-[75%] mx-auto"/>
      <main className="h-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tunes" element={<Tunes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
