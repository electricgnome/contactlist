import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { getContacts, setContacts } from "./contacts.js";

function fetchFailed() {
  console.error("Uh-oh - fetching initial contacts.json failed!");
}

if (!getContacts()) {
  window
    .fetch("data/contacts.json")
    .then(function(response) {
      return response.json();
    })
    .then(setContacts)
    .then(startRendering)
    .catch(fetchFailed);
} else {
  startRendering();
}

function startRendering() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
registerServiceWorker();
