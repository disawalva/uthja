import React from "react";
import SignIn from "./SignIn";
import {Loader} from "semantic-ui-react";

export default class Auth extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isSignedIn : "unknown"
    }
  }

  componentDidMount(){
    let firebase = this.props.authHelper.getFirebase();
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({isSignedIn : !!user ? "yes" : "no"});
    });
  }
  
  render(){
    return {
      yes : this.props.children,
      no : <SignIn authHelper={this.props.authHelper}/>,
      unknown: <Loader></Loader>
    }[this.state.isSignedIn]
  }
}