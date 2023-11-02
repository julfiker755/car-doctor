import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useAuthState from '../../Hooks/useAuthState';


const Private = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useAuthState()
    if (loading) {
       return  <Loading></Loading>
    }
   
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;
