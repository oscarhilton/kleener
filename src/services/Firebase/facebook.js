import * as firebase from "firebase";

export const startFacebook = provider =>
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.additionalUserInfo.profile;

      console.log(user, "user from firebase");
      var newUser = result.additionalUserInfo.isNewUser;

      const { email, first_name, id, last_name, picture } = user;

      const newUserObject = {
        socialId: id,
        firstName: first_name,
        lastName: last_name,
        picture: picture.data.url,
        email,
      };

      return {
        newUser,
        token,
        user: newUserObject,
      };
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
      console.log(error);
      return error;
    });

export const signOutUser = () => firebase.auth().signOut();
