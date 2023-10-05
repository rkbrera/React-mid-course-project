import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { Provider } from "react-redux"; 
import { store } from "./store/store";


const rootElement = document.getElementById("root"); //Obtener elemento por id root
const root = ReactDOM.createRoot(rootElement); //Creamos Dom virtual de react para manejar estados de react

root.render(
  <Provider store={store}>
      <App />
  </Provider>
)
