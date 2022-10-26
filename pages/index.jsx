import React from 'react';
import { signIn } from "next-auth/react";

const UserLogin = () => {
    return (
        <div class="container" id="container">
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <button onClick={() => signIn("facebook", {
                            callbackUrl: `${window.location.origin}/dashboard`,
                        })} class="social facebook"><i class="fab fa-facebook-f "></i></button>
                        <button onClick={() => signIn("google", {
                            callbackUrl: `${window.location.origin}/dashboard`,
                        })} class="social google" ><i class="fab fa-google-plus-g"></i></button>
                        <button onClick={() => signIn("github", {
                            callbackUrl: `${window.location.origin}/dashboard`,
                        })} class="social linkedin"><i class="fab fa-github"></i></button>
                        {/* <button class="social twitter"><i class="fab fa-twitter"></i></button> */}
                        <button onClick={() => signIn("gitlab", {
                            callbackUrl: `${window.location.origin}/dashboard`,
                        })} class="social gitlab"><i class="fab fa-gitlab"></i></button>

                    </div>
                    {/* <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className='button'>Sign In</button> */}
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Next.js Authentication</h1>
                        <p>Please choose the authentication provider</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin