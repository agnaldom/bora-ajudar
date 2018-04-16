import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB2Y7q_Xme3QE6THAkwDKYrLXbaJXBUqzw",
    authDomain: "bora-ajudar-b7610.firebaseapp.com",
    databaseURL: "https://bora-ajudar-b7610.firebaseio.com",
    projectId: "bora-ajudar-b7610",
    storageBucket: "bora-ajudar-b7610.appspot.com",
    messagingSenderId: "681219579490"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())
export default base

