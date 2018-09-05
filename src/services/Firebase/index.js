import * as firebase from "firebase";
import sectionModel from "services/Models/section";
import todoModel from "services/Models/todo";

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

  return database = firebase.database();
};

// retrieve from firebase
// return promise object
export const getSectionsDB = () => {
  return database.ref("/").once("value");
};

// export const getLiveSections = () => {
//   return database.ref("/").on("value", snapshot => snapshot);
// };

// get specified section
export const getTodoDB = (sectionId) => {
  return database.ref(`/${sectionId}`).once("value");
};

// add new section
export const addSection = (name, author) => {
  let key = database.ref("/").push().key;
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP, author);
  return database.ref("/" + key).set(model);
};

// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`).once("value").then((todo) => {
      let todos = todo.val().todos || [];
      let key = database.ref(`/${id}`).push().key;
      todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP));
      database.ref(`/${id}/todos`).set(todos)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};
