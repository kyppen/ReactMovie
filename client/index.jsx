import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Application} from "./Application";

import "./application.css";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<BrowserRouter>
<Application/>
</BrowserRouter>)