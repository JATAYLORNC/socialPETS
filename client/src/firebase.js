import firebase from "firebase";

  console.log(process.env);

  // const config = {
  //   apiKey: process.env.REACT_APP_APIKEY,
  //   authDomain: process.env.REACT_APP_authDomain,
  //   databaseURL: process.env.REACT_APP_databaseURL,
  //   projectId: process.env.REACT_APP_projectId,
  //   storageBucket: process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId
  //   };

    const config = {
      apiKey: "AIzaSyC9ENwZn7wSnDXTMsQjzk4MD9g3tG9ekQU",
      authDomain: "socialpets-c36e5.firebaseapp.com",
      databaseURL: "https://socialpets-c36e5.firebaseio.com",
      projectId: "socialpets-c36e5",
      storageBucket: "socialpets-c36e5.appspot.com",
      messagingSenderId: "966868047117"
      };

  firebase.initializeApp(config);

  export default firebase;