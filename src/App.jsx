import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./components/Signin"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/signin" exact element={<Signin/>} />
        {/* <Route path="/about" element={<Quiz />} /> */}
      </Routes>
    </Router>
  )
}

export default App