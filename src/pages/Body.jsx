import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import { useDarkMode } from "../context/DarkModeContext";

function Body() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <Hero />
      <Features />
      <Download />
    </div>
  );
}

export default Body;
