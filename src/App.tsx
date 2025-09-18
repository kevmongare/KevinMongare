import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Menu from "./components/Menu";
import Hero from "./pages/LandingPage/Components/Hero";
import AboutMe from "./pages/LandingPage/Components/about-me";
import Experience from "./pages/LandingPage/Components/Experience";
import Projects from "./pages/LandingPage/Components/projects";
import ContactSection from "./pages/LandingPage/Components/Contact";
import FooterPart from "./pages/LandingPage/Components/footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Router>
      <ThemeToggle /> {/* Theme button */}
      <Menu />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><AboutMe /></section>
              <section id="experience"><Experience /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><ContactSection/></section>
              <section id="footer"><FooterPart /></section>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
