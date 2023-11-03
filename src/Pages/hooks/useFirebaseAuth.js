import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useFirebaseAuth = () => {
    // Create user account with Email & Password
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    return {
        createUserWithEmailAndPassword,
        user, loading, error
    }
}

export default useFirebaseAuth;