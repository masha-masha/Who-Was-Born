import "./App.css";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonDetail from "./components/PersonDetail/PersonDetail";
import { AboutPage } from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";

function App() {
 return (
  <BrowserRouter>
   <div className="app">
    <Header />
    <main className="main">
      <Routes>
     <Route path="/" element={<CategorySelect />} />
     <Route path="/persons/:slug" element={<PersonDetail />} />
     <Route path="/about" element={<AboutPage />} />
    </Routes>
    </main>
    <Footer />
   </div>
  </BrowserRouter>
 );
}

export default App;
