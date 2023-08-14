import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
``
const domain = "YOUR_AUTH0_DOMAIN";
const clientId = "YOUR_AUTH0_CLIENT_ID";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </Auth0Provider>
  // </React.StrictMode>
);
