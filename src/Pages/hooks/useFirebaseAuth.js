import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useFirebaseAuth = () => {
    // Create user account with Email & Password
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    // User Sign-in
    const [
        signInWithEmailAndPassword,
        signedInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    return {
        createUserWithEmailAndPassword,
        user, loading, error, signInWithEmailAndPassword, signedInUser, signInLoading, signInError
    }
}

export default useFirebaseAuth;