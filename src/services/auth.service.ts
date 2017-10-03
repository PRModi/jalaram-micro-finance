import firebase from 'firebase';


export class AuthService {

    signUp(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);

    }

    signOut() {
        firebase.auth().signOut();
    }

    signIn(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    getActiveUser() {
        return firebase.auth().currentUser;
    }


}