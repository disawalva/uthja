import React from "react";
import {Button,Icon,Loader,Dimmer} from "semantic-ui-react";

export default class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.signIn = this.signIn.bind(this);
    this.state = {
      isSigningIn : false
    }
  }

  signIn(){
    if(this.props.authHelper.isUserSignedIn()){
      alert("already signed in")
      return;
    }
    this.setState({isSigningIn: true}, (async () => {
      let result = await this.props.authHelper.signIn();
      if(result.user){
        alert(JSON.stringify(result.user));
      }
      else{
        alert(JSON.stringify(result.error));
      }
      this.setState({isSigningIn: false});
      
    }));
  }

  render(){
    return <div style={{
      display : "flex",
      height : "100%",
      width : "100%",
      justifyContent : "center",
      alignItems : "center",
      flexDirection : "column",
      color : "white"
    }}>
      <div style={{
        padding: "32px 16px 32px 16px",
        border: "1px solid #eee",
        borderRadius: "8px"
      }}>
        <h1 style={{
          fontSize: "xxx-large",
          textAlign: "center"
        }}>Uthja</h1>
        <Button color='blue' onClick={this.signIn}>
            <Icon name='google' /> Sign In with Google
            {this.state.isSigningIn && <Dimmer active>
              <Loader />
            </Dimmer>}
        </Button> 
      </div>
    </div>;
  }
}
