import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewNote from "./components/NewNote";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoteDetails from "./components/NoteDetails";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <NewNote />
            </Route>
            <Route path="/notes/:id">
              <NoteDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
