import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "../Components/Container";
import { Footer } from "../Components/footer";
import { Header } from "../Components/header";
import { About } from "../page/About";
import { Contact } from "../page/Contact";
import { Services } from "../page/Expertise";
import { Dietician } from "../page/Expertise/Dietician";
import { Physio } from "../page/Expertise/physio";
import { Psique } from "../page/Expertise/Psique";
import { Home } from "../page/Home";
import { Professional } from "../page/Professionals";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/professionals" element={<Professional />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/nutricionista" element={<Dietician />} />
          <Route path="/services/fisioterapia" element={<Physio />} />
          <Route path="/services/menteepsique" element={<Psique />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
