"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div>
            <div>
                <button>&#1005;</button>
            </div>

            <h2>Login</h2>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email"></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"></input>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
      )}
   </>
  )
}

export default LoginPage


//we defined two dots because the login route is outside the games route