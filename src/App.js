import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CountryDetail from "./pages/CountryDetail";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  // let getCountries = async ()=>{
  //   let response = await fetch('https://restcountries.com/v3.1/all')
  //   let allCountries = await response.json()
  //   console.log(allCountries);
  // }

  // getCountries()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="detail" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
