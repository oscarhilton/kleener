import * as firebase from "firebase";
import sectionModel from "services/Models/section";
import todoModel from "services/Models/todo";
import userModel from "services/Models/user";

let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyAJ7KcQYcnZKDGFESVkN0KGT608dHUVwHk",
    authDomain: "kleener-67e6a.firebaseapp.com",
    databaseURL: "https://kleener-67e6a.firebaseio.com/",
    storageBucket: "gs://kleener-67e6a.appspot.com",
    messagingSenderId: "488960077963",
  };
  firebase.initializeApp(config);

  return (database = firebase.database());
};

// retrieve from firebase
// return promise object
export const getSectionsDB = () => {
  return database.ref("/sections").once("value");
};

// export const getLiveSections = () => {
//   return database.ref("/").on("value", snapshot => snapshot);
// };

// get specified section
export const getTodoDB = sectionId => {
  return database.ref(`/sections/${sectionId}`).once("value");
};

// add new section
export const addSection = (name, author) => {
  let key = database.ref("/sections/").push().key;
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP, author);
  return database.ref("/sections/" + key).set(model);
};

// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database
      .ref(`/sections/${id}`)
      .once("value")
      .then(todo => {
        let todos = todo.val().todos || [];
        let key = database.ref(`/${id}`).push().key;
        todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP));
        database
          .ref(`/sections/${id}/todos`)
          .set(todos)
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
  });
};

export const completeTodoItem = (sectionId, todoId) => {
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser);
  const { displayName, photoURL, uid } = currentUser.providerData[0];
  return new Promise((resolve, reject) => {
    database
      .ref(`/sections/${sectionId}`)
      .once("value")
      .then(todo => {
        let todos = todo.val().todos || [];
        let index = todos.findIndex(obj => obj.id === todoId);
        todos[index].completed = true;
        todos[index].completedBy = {
          name: displayName,
          photo: photoURL,
          uid,
        };
        database
          .ref(`/sections/${sectionId}/todos`)
          .set(todos)
          .then(res => resolve(res))
          .catch(e => reject(e));
      });
  });
};

export const addNewUser = ({ socialId, firstName, lastName, picture, email }) => {
  let key = database.ref("/user").push().key;
  let model = userModel(key, socialId, firstName, lastName, picture, email, firebase.database.ServerValue.TIMESTAMP);
  return database.ref("/user/" + key).set(model);
};

export const getUserByFacebookID = id => {
  return database
    .ref("/user")
    .orderByChild("socialId")
    .equalTo(id)
    .once("value");
};

export const getUserDB = () => {
  return database.ref("/user").once("value");
};
