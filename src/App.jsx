import Available_jobs from "./components/Available_jobs"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import Recruit from "./components/Recruit"
import './styles/styles.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {


  return (
    <>
     <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
     </Router>
    </>
  )
}

export default App
