import React, { useContext } from 'react';
import { Authconext } from '../UserContaxt/UserContaxt';

const useAuthState = () => {
    const all=useContext(Authconext)
    return all
};

export default useAuthState;