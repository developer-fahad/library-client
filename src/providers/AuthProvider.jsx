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
import axios from "axios";
    
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
            const userEmail = cUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(cUser);
            setLoading(false);
            if(cUser){
              
              axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
              .then(res =>{
                console.log('Token Response ', res.data);
              })
            }
            else{
              axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
              .then(res => {
                console.log(res.data);
              })
            }
        });
        return () => {
          unSubscribe();
        };
      }, [user?.email]);
    
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