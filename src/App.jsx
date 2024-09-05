import Header from "./components/Header";
import Hero from "./components/Hero";
import "../src/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import { LangProvider } from "./utils/langContext";

const App = () => {
  return (
    <>
      <LangProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<About />} />
          </Routes>
          {/* End Switch */}
        </BrowserRouter>
      </LangProvider>
    </>
  );
};

export default App;
