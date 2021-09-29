import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./index.scss";
import App from "./containers/App";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("kaverihaku")
);
