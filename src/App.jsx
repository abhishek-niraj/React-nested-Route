import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Abhishek from "./pages/Abhishek";
import Niraj from "./pages/Niraj";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />}>
          <Route index element={<Abhishek />} />
          <Route path="abhishek" element={<Abhishek />} />
          <Route path="niraj" element={<Niraj />} />
        </Route>

        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
