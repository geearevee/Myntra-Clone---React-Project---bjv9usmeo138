import {app} from "./firebase";
import {getAuth,signOut , GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const signInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, provider)
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        return user;
    }catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return null;
  };
}

export const authChecker = async (cbFunction) => {
    onAuthStateChanged(auth, (user) => cbFunction(user));
}

export const logoutUser = async () => {
    try{
        await signOut(auth);
        return true
    }catch(error) {
        return false
    };
}