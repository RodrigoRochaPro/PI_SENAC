import firebase from "firebase/app"
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyC7vZ10Uj2pbKDOHHilDrZny4H-3OpcUzo",
        authDomain: "pi---senac.firebaseapp.com",
        projectId: "pi---senac",
    })
}

export default firebase