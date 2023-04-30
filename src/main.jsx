import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MenuContextProvider } from "./contexts/MenuContext";
import { CartContextProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </MenuContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
