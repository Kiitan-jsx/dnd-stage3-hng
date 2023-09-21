import { useEffect, useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { GALLERY, LOGIN } from "../lib/routes";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export function useAuth() {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser.uid);
      } else {
        setUser(null);
      }
      setUserLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, userLoading };
}

export function useLogin() {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = GALLERY }) {
    setIsLoginLoading(true);
    
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login Successful!");
        navigate(redirectTo);
      } catch (error) {
        toast.error("Login Failed!");
        setIsLoginLoading(false);
      }
      return false;
  
      setIsLoginLoading(false);
      return true;
    }
    
    return { login, isLoginLoading };
  }




export function useLogout() {
  const [signOut, isLogoutLoading] = useSignOut(auth);
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      toast.success("Logout Successful!");
      navigate(LOGIN);
    } else toast.error("Logout Unsuccessful!");
  }

  return { logout, isLogoutLoading };
}