
import React, {useState} from 'react';
import loginimg from "../Assets/images/login.jpg";

const Signin = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = ( e ) => {
        setUserData(( prev ) => ({...prev, [e.target.id]: e.target.value}));
    }

    // const handleSubmit = async ( event ) => {
    //     event.preventDefault();
    //     setError('');
    //     setSuccess('');
    //
    //     try {
    //         const response = await fetch('/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({email, password}),
    //         });
    //
    //         const data = await response.json();
    //         if (response.ok) {
    //             setSuccess('Login successful!');
    //             // Handle success, e.g., redirect or update state
    //         } else {
    //             setError(data.message);
    //         }
    //     } catch (error) {
    //         setError('An error occurred. Please try again.');
    //     }
    // };

    return (
        <div className='flex flex-row justify-between p-8'>
            <img src={loginimg} className='w-[40%] h-[40%]' alt="Login"/>
            <div className="flex flex-col text-center w-[60%] h-[76vh] p-8">
                <h1 className='text-3xl text-center mb-5'>
                    Welcome Back : <span style={{fontSize: '24px'}}>)</span>
                </h1>
                <div className="flex items-center mb-5">
                    <hr className="flex-grow border-t border-neutral-400"/>
                    <p className="mx-4 text-neutral-400 text-font text-[14px]">Login with Email</p>
                    <hr className="flex-grow border-t border-neutral-400"/>
                </div>

                <form  className="flex flex-col items-center">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        className="mb-4 p-2 border border-gray-300 rounded text-font"
                    />
                    <div className='w-full my-3 relative'>

                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                            className="mb-4 p-2 border border-black-300 rounded text-font"
                        />
                        <button type='button' onClick={togglePassword}
                                className=' hover:cursor-pointer text-sm text-blue-500 absolute right-2 top-[3.2rem] transform -translate-y-2 '>
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>

                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">{success}</p>}
            </div>
        </div>
    );
=======
import React, { useState } from 'react';
import loginimg from "../Assets/images/login.jpg";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  setError('');
  setSuccess('');

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      setSuccess('Login successful!');
      // Handle success, e.g., redirect or update state
    } else {
      setError(data.message);
    }
  } catch (error) {
    setError('An error occurred. Please try again.');
  }
};

return (
  <div className='flex flex-row justify-between p-8'>
    <img src={loginimg} className='w-[40%] h-[40%]' alt="Login" />
    <div className="flex flex-col text-center w-[60%] h-[76vh] p-8">
      <h1 className='text-3xl text-center mb-5'>
        Welcome Back : <span style={{ fontSize: '24px' }}>)</span>
      </h1>
      <div className="flex items-center mb-5">
        <hr className="flex-grow border-t border-neutral-400" />
        <p className="mx-4 text-neutral-400 text-font text-[14px]">Login with Email</p>
        <hr className="flex-grow border-t border-neutral-400" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border border-gray-300 rounded text-font"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 p-2 border border-black-300 rounded text-font"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  </div>
);
}

export default Signin;
