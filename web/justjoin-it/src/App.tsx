import React from "react";
import "./App.css";
import { SearchBar } from "./components/searchBar/SearchBar";
import { TopBar } from "./components/topBar/TopBar";
import { HomePage } from "./pages/homePage/HomePage";
import { SignInPage } from "./pages/signInPage/SignInPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <SignInPage /> */}
    </div>
  );
}

export default App;
