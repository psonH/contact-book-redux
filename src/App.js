import React from "react";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { Switch, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <div className="container">
          <div className="py-3">
            <Route exact path="/" component={Contacts} />
            <Route path="/add" component={AddContact} />
            <Route path="/edit/:id" component={EditContact} />
          </div>
        </div>
      </Switch>
    </div>
  );
};

export default App;
