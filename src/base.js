import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC5IQH0lUkZYwoR9XDcpmtjJGYTggIOUF4",
    authDomain: "casa-do-idoso.firebaseapp.com",
    databaseURL: "https://casa-do-idoso.firebaseio.com",
    projectId: "casa-do-idoso",
    storageBucket: "casa-do-idoso.appspot.com",
    messagingSenderId: "444402652253"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())
export default base

