import React, { useContext } from 'react';
import { AuthContext } from '../Prividers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        <Spinner color="blue" />
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;