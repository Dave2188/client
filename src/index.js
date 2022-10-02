import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(
// 	reducers,
// 	compose(applyMiddleware(thunk), composeWithDevTools())
// );

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App tab="home" />
	</Provider>
);

// ReactDOM.render(<App />, document.getElementById("root"));
//react 18 uses create root instead of react-dom render
