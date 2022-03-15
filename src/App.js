import React from "react";
import { Notes } from "./Pages/Notes";
import { Todos } from "./Pages/Todos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Alert } from "./Components/Alert";
import { Navbar } from "./Components/Navbar";
import { AlertState } from "./Context/Alert/AlertState";
import { FirebaseState } from "./Context/Firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-5">
            <Alert />
            <Switch>
              <Route path={"/"} exact component={Notes} />
              <Route path={"/todos"} component={Todos} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
