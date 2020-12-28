import React, { useState } from 'react'
import { login } from './features/userSlice'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'

import './login.css'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert("Please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))
                    })
            })
            .catch((error) => alert(error))
    }
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))
            })
            .catch(error => alert(error))

    }
    return (
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UGt6gfmUsD8pPpXVCAATl4RvgA83I1Yetg&usqp=CAU"
                alt="" />

            <form action="">
                <input
                    placeholder="Full name required if registering"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" />

                <input
                    placeholder="Profile pic URL (Optional)"
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    type="text" />
                <input placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" />
                <input placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" />
                <button
                    type="submit"
                    onClick={loginToApp}>
                    Sign In
                 </button>
            </form>
            <p>Not a member?
            <span className="login__register"
                    onClick={register}>
                    Register Now
            </span>
            </p>

        </div>
    )
}

export default Login
