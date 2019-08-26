import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCLwR1D7mT1ld_oX-yX6oNEuipUaH6Ttjs",
    authDomain: "buymyclothing-db.firebaseapp.com",
    databaseURL: "https://buymyclothing-db.firebaseio.com",
    projectId: "buymyclothing-db",
    storageBucket: "",
    messagingSenderId: "433570772821",
    appId: "1:433570772821:web:10d68b584104061c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //popup

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
