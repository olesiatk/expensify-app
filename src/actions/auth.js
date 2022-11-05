import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebase"

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
        // .then((result) => {
        //     // This gives you a Google Access Token. You can use it to access the Google API.
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     // The signed-in user info.
        //     const user = result.user;
        //     // ...
        // }).catch((error) => {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.customData.email;
        //     // The AuthCredential type that was used.
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        //     // ...
        // });
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        const auth = getAuth();
        signOut(auth)
    }
}