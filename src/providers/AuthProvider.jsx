import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// import { firebaseConfig } from '../../src/firebase/firebase.config.js';

// const app = initializeApp(firebaseConfig); // initialize the Firebase app

export const AuthContext = createContext(null);

// const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const user = null;
  const authInfo = { user };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
