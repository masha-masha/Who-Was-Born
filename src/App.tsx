import "./App.css";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonDetail from "./components/PersonDetail/PersonDetail";
import { AboutPage } from "./components/AboutPage/AboutPage";


function App() {
 return (
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<CategorySelect />} />
    <Route path="/persons/:slug" element={<PersonDetail />} />
    <Route path="/about" element={<AboutPage/>}/>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
