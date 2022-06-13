import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App1 from "./app1/App";
import App2 from "./app2/App";
import App3 from "./app3/App";
import App4 from "./app4/App";
import App5 from "./app5/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App1/>} />
                <Route path="cryptoapp/*" element={<App2/>} />
                <Route path="amazonscraper/*" element={<App3/>} />
                <Route path="placeadvisor/*" element={<App4/>} />
                <Route path="googl/*" element={<App5/>} />
            </Routes>
        </BrowserRouter>
  );