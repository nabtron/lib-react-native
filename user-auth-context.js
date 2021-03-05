// we've to pass the authcontext in this way to make user login to work:
// imp: listen to the change of user to make context work, for firebase:
    const {user, setUser} = useContext(AuthContext)

  function onAuthStateChanged(user) {
    setUser(user);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

// now other context logics

// in main App.js

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Navigation from './inc/navigation'
import {AuthContext} from './context/AuthContext'

export default function App() {

  let [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{user,setUser}}>
      <Navigation />
    </AuthContext.Provider>     
  );
}

// then in the auth.js file or where authentication happens, use this code:

import { AuthContext } from '../context/AuthContext';

export default function Auth() {
     const {user,setUser} = useContext(AuthContext)
      // then the auth logic, and when user has logged in: 
      setUser(user)
}

// then to logout, same as last step, but instead of setting it to user, set it to null: 
      setUser(null)
