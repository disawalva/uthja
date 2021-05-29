export default class SignInHelper{
  constructor(firebase){
    this.firebase = firebase;
  }

  getFirebase(){
    return this.firebase;
  }

  isUserSignedIn(){
    return this.firebase.auth().currentUser || false;
  }

  async signIn(){
    let provider = new this.firebase.auth.GoogleAuthProvider();

    try {
      let result = await this.firebase.auth()
      .signInWithPopup(provider)
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      return {user, token}
    }
    catch(error){
      alert("Failed to Sign In. Please try again")
      return {error}
    };
  }
}