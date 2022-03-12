// firebase 8.2.3 a été installé à la place de firebase 9.* pour cause de problème "Can't find variable: IDBIndex" d'après expo
// 10 mars 2022 : For the moment the workarounds are to eject from Expo and use a custom build, or revert to an older version of the Firebase SDK (earlier v9 preferred, but v8 if that doesn't work). The team is working on a fix for this though, so track that bug I linked for updates.
// la config est donc pour firebase 8.2.3 . la config pour fb 9 est différente, voir projet authentiBase

import * as firebase from "firebase";

const firebaseConfig = {
     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
     appId: process.env.REACT_APP_FIREBASE_APP_ID
     measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
     app = firebase.initializeApp(firebaseConfig);
} else {
     app = firebase.app()
};

const auth = firebase.auth();

export { auth };
