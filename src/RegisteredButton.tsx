// src/App.tsx or a temporary RegisterButton.tsx
import React, { useEffect } from "react";
import { registerCandidate } from "./utils/register";

function App() {
  useEffect(() => {
    registerCandidate();
  }, []);

  return <h1>Afford Registration Test</h1>;
}

export{};