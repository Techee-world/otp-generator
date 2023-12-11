import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import SignInPage from "./page/SignInPage";
import NavBar from "./component/NavBar";


const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/"
            element={
              <SignInPage  />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
