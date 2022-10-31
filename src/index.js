import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { NoteProvider } from "./context/NoteContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <NoteProvider>
          <App />
        </NoteProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
