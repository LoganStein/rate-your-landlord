import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Landlord from "./Landlord";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/Landlord" component={Landlord} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/signIn" component={LoginPage} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
