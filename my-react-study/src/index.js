// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import rootReducer from "./react12/Storage/reducer";
// import { createStore } from "redux";
//
// const store = createStore(rootReducer);
// console.log(store.getState());
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import configureStore from "./react12/Storage/reducer/store";
// import {PersistGate} from "redux-persist/integration/react";
//
// const { store, persistor } = configureStore();
// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate persisor={persistor} loding={null}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );
//

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import configureStore from "./react12/Storage/reducer/store";
// import {PersistGate} from "redux-persist/integration/react";
//
// const { store, persistor } = configureStore();
// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate persisor={persistor} loding={null}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );
//

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
