import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App1 from "./app1/App";
import App2 from "./app2/App";
import App3 from "./app3/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App1/>} />
                <Route path="cryptoapp/*" element={<App2/>} />
                <Route path="amazonscraper/*" element={<App3/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
  );