import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    // Authstate from firebase hook
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    console.log(user);
    // const authHandler = () => user ? children : navigate('/login');
    // useEffect(() => {
    //     loading && <p>Loading</p>
    //     authHandler();
    // }, [user])
    // loading && <p>Loading</p>
    if (loading) {
        return <div><p>Loading..</p></div>
    }
    return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;