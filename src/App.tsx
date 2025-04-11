import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import "./index.css";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
