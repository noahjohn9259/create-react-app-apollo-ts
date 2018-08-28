import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./scss/blueprint.css";
import "./scss/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

if ((module as any).hot) {
  (module as any).hot.accept();
}

registerServiceWorker();
