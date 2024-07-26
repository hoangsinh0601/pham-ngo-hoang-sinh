import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Problem1 from "./pages/Problem1";
import Problem2 from "./pages/Problem2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/problem1" element={<Problem1 />} />
          <Route path="/problem2" element={<Problem2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
