import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "./Pages/Global";
import Search from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/Search" element={<Search />}>
          {" "}
        </Route>
        <Route path="/Global" element={<Global />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
