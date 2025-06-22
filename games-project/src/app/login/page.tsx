import React from 'react'

const LoginPage = () => {
  return (
    <div className=''>
      <div>
        <h2>Login</h2>
        <form>
            <div>
                <label>Email</label>
                <input type='email' placeholder='Enter your email'></input>
            </div>
            <div>
                <label>Password</label>
                <input type='email' placeholder='Enter your email'></input>
            </div>
            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
