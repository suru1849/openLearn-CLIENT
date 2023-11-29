/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Config/firebase.config";
import { clearToken } from "../api/auth";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// Google Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Sign In with Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In with Email And PassWord
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User photoUrl and UserName
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Log Out
  const logOut = async () => {
    setLoading(true);
    await clearToken();
    toast.success("Log Out Successful");
    return signOut(auth);
  };

  // User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser --> ", currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // Auth Information
  const authInfo = {
    user,
    googleSignIn,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
