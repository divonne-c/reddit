import "./App.css";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/global.styles";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <GlobalStyles>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subreddit/:subredditId" element={<Subreddit />} />
      </Routes>
      <Footer />
    </GlobalStyles>
  );
}

export default App;
