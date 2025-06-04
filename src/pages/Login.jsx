import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
     <div className="flex min-h-screen bg-[#E9E6DF]">
      {/* Form login (tengah) */}
      
      <div className="flex-1 flex items-center justify-center p-4"> 
        <form
          onSubmit={handleSubmit}
        >
          <div>
                <img
                src = "public\image\Logo.png"
                alt= "Logo"
                className="h-full max-h-screen w-auto object-contain"
                />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 text-gray-600">
              Username
            </label>
            <input
              placeholder='Enter your username'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-gray-600">
              Password
            </label>
            <input
              placeholder='Enter your password'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7b5e46] text-white py-2 rounded-md hover:bg-[#654735] focus:outline-none focus:ring-2 focus:ring-[#7b5e46]"
          >
            Login
          </button>
        </form>
      </div>

      
      <div className="flex-1 hidden md:flex items-center justify-end">
        <img
          src="public\image\loginbg.png"
          alt="Login Illustration"
          className="h-full max-h-screen w-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Login;
