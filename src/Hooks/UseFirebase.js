import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const UseFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading, setIsloading]=useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google signin function==============================//
    const signInWithGoogle=()=>{
        setIsloading(true)
      return  signInWithPopup(auth, googleProvider)

        
    }  
    //signout handler=======================================//
    const logOut=()=>{ 
        setIsloading(true)     
        signOut(auth)
        .then(() => {
            setUser({})
        }).finally(()=>{
            setIsloading(false)
        })
    }
    // on Auth state change==================================//
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsloading(false)
        });
    },[auth])
    return (
            {
                signInWithGoogle,
                user,
                isLoading,
                logOut,
                
            }
    );
};
//     const [user,setUser]=useState({});
//     const [isLoading,setIsLoading]=useState(true);

//     const auth=getAuth();

//     const signInWithGoogle=()=>{
//     const googleProvider=new GoogleAuthProvider();
//     signInWithPopup(auth,googleProvider)
//     .then(result=>{
//         const user=result.user;
//         setUser(user);
//     })
//     .finally(()=>setIsLoading(false))
//     }
//     const logOut=()=>{
//         signOut(auth)
//         .then(()=>{setUser()})
//         .finally(()=>setIsLoading(false));
//     }
//     useEffect(()=>{

//     const authapply=onAuthStateChanged(auth,user=>{
//         console.log('this is me');
//     if (user) {
//       setUser({user});
//     }
//     else{
//         setUser({});
//     }
//     setIsLoading(false);
//     return ()=>authapply();
//    },[auth]);
   
//     })
//     return{
//         user,
//         signInWithGoogle,
//         logOut,
//         isLoading
//     }
// }

export default UseFirebase;