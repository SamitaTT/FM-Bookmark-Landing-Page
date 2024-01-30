import "./App.css";
import Header from "./pages/Header";
import { Hero, Features, Download } from "./pages/Body";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
