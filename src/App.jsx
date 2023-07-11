
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import Details from "./Components/Details"
import NavBar from "./Components/NavBar"

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:coinId" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
