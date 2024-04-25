// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Reserve from './Reserve';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </Router>
  );
}

export default App;
