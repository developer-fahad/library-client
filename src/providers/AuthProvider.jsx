import {
    GithubAuthProvider,
      GoogleAuthProvider,
      TwitterAuthProvider,
      createUserWithEmailAndPassword,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
      updateProfile,
    } from "firebase/auth";
    import { createContext, useEffect, useState } from "react";
    import auth from "../firebase/firebase.config";
    
    export const AuthContext = createContext(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      console.log(user);
    
      const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const updateUserProfile = (name, image) => {
        
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image
        }).then(() => {
          setUser({
            displayName: name,
            photoURL: image,
            
          });
        });
      };
    
      const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
        
      };
  
  
      const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
        
      };
  
  
    
      // const twitterLogin = () => {
      //   setLoading(true);
      //   return signInWithPopup(auth, twitterProvider);
      // };
    
      const logOut = () => {
        setUser(null);
        setLoading(true);
        return signOut(auth);
      };
    
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (cUser) => {
          if (cUser) {
            setUser(cUser);
            setLoading(false);
          } 
          else {
            setLoading(false);
          }
        });
        return () => {
          unSubscribe();
        };
      }, []);
    
      const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        logOut,
        githubLogin,
        updateUserProfile,
      };
    
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
    };
    
    export default AuthProvider;