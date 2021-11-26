import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

function App() {
  const [name, setName] = React.useState("용용이");

  return (
    <div
      className="App"
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <Route path="/" exact>
        <Start name={name} />
      </Route>
      <Route path="/quiz">
        <Quiz />
      </Route>
      <Route path="/score">
        <Score name={name} />
      </Route>
    </div>
  );
}

export default App;
