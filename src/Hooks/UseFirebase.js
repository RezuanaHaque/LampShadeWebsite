import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/Firebase.init';

initializeFirebase()
const UseFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    // const [loggedIn, setLoggedIn] = useState(false)

    const auth = getAuth();

    const registerUser = (email, password, name) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {
                // Signed in 
                setError('')
                const user = result.user;
                setUser(user)
                // console.log(email, name);
                saveUser(email, name);
                // setLoggedIn(true)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            })
            .finally(() => {
                setLoading(false)
            });
    }

    const loginUser = (email, password,history,location) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // console.log(location?.state?.from);
                const destination= location?.state?.from || '/'
                history.replace(destination);
                // history.push('/dashboard')
                setError('')
                const user = result.user;
                setUser(user)

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            })
            .finally(() => {
                setLoading(false)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
    }, [])

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setError('')
            setUser({})
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setError(errorMessage)
        })
            .finally(() => {
                setLoading(false)
            });
    }
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email]);

    const saveUser = (email, displayName) => {
        // console.log("hello")
        const user = { email, displayName }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then();
    }
    // console.log(admin);

    return {
        logOut,
        user,
        admin,
        error,
        loginUser,
        registerUser,
        loading
        // loggedIn
    }
};

export default UseFirebase