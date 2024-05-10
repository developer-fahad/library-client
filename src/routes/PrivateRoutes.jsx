
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <>
            <div className="flex items-center justify-center space-x-2 h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-600"></div>
            </div>
        </>

    }

    if (user) {
        return children
    }

    return (
        <Navigate to={`/login`} state={location?.pathname || '/'}>
        </Navigate>
    );
};

export default PrivateRoutes;