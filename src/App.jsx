import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Teacher from "./pages/Teacher";
import Price from "./pages/Price";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Pages with Header + Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Protected Routes */}
            <Route path="/course" element={<ProtectedRoute><Course /></ProtectedRoute>} />
            <Route path="/teacher" element={<ProtectedRoute><Teacher /></ProtectedRoute>} />
            <Route path="/price" element={<ProtectedRoute><Price /></ProtectedRoute>} />
            <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />
          </Route>

          {/* Auth pages — standalone (no Header/Footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}