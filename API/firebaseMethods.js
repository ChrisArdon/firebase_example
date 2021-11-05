import firebase from 'firebase';
import "@react-native-firebase/firestore";
import { Alert } from 'react-native';

export async function registration(email, password, lastName, firstName){
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({
            email: currentUser.email,
            lastName: lastName,
            firstName: firstName,
        });
    } catch (err) {
        Alert.alert('Hay algo que no funciona!!', err.message);
    }
}

export async function signIn(email, password){
    try {
        await firebase.auth().signInWithEmailAndPassword(email,password);
    } catch (err) {
        Alert.alert("Hay algo que no funciona!!!", err.message);
    }
}

export async function logginOut(){
    try {
        await firebase.auth().signOut();
    } catch (err) {
        Alert.alert("Hay algo que no funciona!!!", err.message);
    }
}