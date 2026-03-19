import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Books from "features/Books/List";
import Home from "features/Home";
import Members from "features/Member/List";
import Category from "features/Category/List";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Books" element={<Books />} />
             <Route path="/Member" element={<Members />} />
             <Route path="/Category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;