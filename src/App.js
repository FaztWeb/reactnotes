import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Navbar } from "./components/Navbar/Navbar";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NoteFormPage } from "./pages/NoteFormPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<NoteFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/new" element={<NoteFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}
