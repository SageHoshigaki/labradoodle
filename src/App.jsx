import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AvailablePuppiesPage from "./pages/AvailablePuppiesPage";
import AboutPage from "./pages/AboutPage";
import BreedPage from "./pages/BreedPage";
import GuardianProgramPage from "./pages/GuardianProgramPage";
import PuppyApplicationPage from "./pages/PuppyApplicationPage";
import ContactFaqPage from "./pages/ContactFaqPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/available-puppies" element={<AvailablePuppiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/breed" element={<BreedPage />} />
        <Route path="/guardian-program" element={<GuardianProgramPage />} />
        <Route
          path="/puppy-family-profile"
          element={<PuppyApplicationPage />}
        />
        <Route path="/contact" element={<ContactFaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}
