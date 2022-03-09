import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./authShit/Login";
import Reset from "./authShit/Reset";
import Register from "./authShit/Register";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/reset' element={<Reset />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
