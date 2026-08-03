import "./App.css";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PersonDetail from "./components/PersonDetail/PersonDetail";

function App() {
 return (
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<CategorySelect />} />
    <Route path="/persons/:slug" element={<PersonDetail />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
