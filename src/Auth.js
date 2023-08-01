import {app} from "./firebase";
import {getAuth,signOut , GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const signInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, provider);
        // continue..

        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        return user;
    }catch(error) {
        console.log(error);
        return null;
  };
}
// to check after refresh if the cx is logged in or not
export const authChecker = async (cbFunction) => {
    // login => logout => loging
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