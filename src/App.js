import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Teacher from "./pages/Teacher";
import Price from "./pages/Price";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/price" element={<Price />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;