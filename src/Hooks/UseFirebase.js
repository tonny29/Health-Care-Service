import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const UseFirebase=()=>{
    const [user,setUser]=useState({});

    const auth=getAuth();

    const signInWithGoogle=()=>{
    const googleProvider=new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        const user=result.user;
        setUser(user);
    })
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{setUser()})
    }
    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
      setUser({user});
    }
   });
    },[])
    return{
        user,
        signInWithGoogle,
        logOut
    }
}

export default UseFirebase;