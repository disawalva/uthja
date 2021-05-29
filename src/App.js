import './App.css';
import Auth from './components/Auth';

import Home from './components/Home';
import Settings from './components/Settings';
import Tutorial from './components/Tutorial';
import Profile from './components/Profile';
import 'semantic-ui-css/semantic.min.css'

import firebase from "firebase/app";
import "firebase/auth";

import SignInHelper from "./helpers/signInHelper"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

let firebaseConfig = {
  apiKey: "AIzaSyCrD9XaP2sM4Q5wyeGHLjHjtetZlrSiL4Q",
  authDomain: "uthja-6a90e.firebaseapp.com",
  projectId: "uthja-6a90e",
  storageBucket: "uthja-6a90e.appspot.com",
  messagingSenderId: "699565102896",
  appId: "1:699565102896:web:241d6e57839971baa8daf5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div style={{height: "96vh", 
                 width: "96vw",
                 padding: "2vh 2vw 2vh 2vw"}}>
      <Auth authHelper={new SignInHelper(firebase)}>         
        <Router>
          <Switch>
            <Route path = "/home">
              <Home />
            </Route>
            <Route path = "/tutorial">
              <Tutorial />
            </Route>
            <Route path = "/profile">
              <Profile />
            </Route>
            <Route path = "/settings">
              <Settings />
            </Route>
            <Route path = "/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Auth>
    </div>
  );
}

export default App;
