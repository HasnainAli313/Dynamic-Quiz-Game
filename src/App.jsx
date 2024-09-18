import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/about" element={<Quiz />} /> */}
      </Routes>
    </Router>
  )
}

export default App