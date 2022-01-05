import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import Header from "./components/header/Header";
import { Redirect, Switch } from "react-router";
import { Route } from "react-router-dom";
import Jobs from "./components/jobs";
import { JobProvider } from "./store/JobContent";
import Post_job from "./components/jobs/post_job";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <JobProvider>
          
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/jobs/newpost">
            {/* <Post_job /> */}
          </Route>
        </JobProvider>
      </div>
    </>
  );
}

export default App;
