import { FC } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute: FC<RouteProps> = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/signup' />;
    }

    return children;
};

export default PrivateRoute;