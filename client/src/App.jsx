import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SelectDevice from "./pages/SelectDevice";
import Form from "./pages/Form";
import { Dashboard } from "./pages/Admin/Dashboard";
import AdminForm from "./components/AdminComponents/AdminForm";
import About from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/selectpage" element={<SelectDevice />} />
          <Route path="/form/:type" element={<Form />} />
          <Route path="/adminform/:id" element={<AdminForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
