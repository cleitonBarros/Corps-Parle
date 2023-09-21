import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "../Components/Container";
import { Footer } from "../Components/footer";
import { Header } from "../Components/header";
import { About } from "../page/About";
import { Home } from "../page/Home";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
