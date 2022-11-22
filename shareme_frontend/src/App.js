import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components";
import Home from "./container/Home";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="890185293385-c206mg9ecn3fl0qglndrli176o593o3m.apps.googleusercontent.com">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
