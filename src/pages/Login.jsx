import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || (isRegistering && !email)) {
      setErrorMessage('Please fill in all required fields');
    } else {
      setErrorMessage('');
      if (isRegistering) {
        console.log('Registering with', { username, email, password });
      } else {
        console.log('Logging in with', { username, password });
      }
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setErrorMessage('');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-white px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-lg shadow-md w-full max-w-lg mt-8 sm:mt-6 lg:mt-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            {isRegistering ? 'Register' : 'Login'}
          </h2>
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 rounded mb-4 text-center text-sm">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2 text-base">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
                placeholder="Enter your username"
              />
            </div>
            {isRegistering && (
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
                  placeholder="Enter your email"
                />
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 text-base">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-5">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out w-full sm:w-auto"
              >
                {isRegistering ? 'Register' : 'Login'}
              </button>
              {!isRegistering && (
                <a href="#" className="text-sm text-red-500 hover:text-red-600 mt-4 sm:mt-0 sm:ml-4">
                  Forgot Password?
                </a>
              )}
            </div>
          </form>
          <p className="mt-6 text-center text-gray-500 text-base">
            {isRegistering
              ? 'Already have an account?'
              : "Don't have an account?"}{' '}
            <button
              onClick={toggleForm}
              className="text-red-500 hover:text-red-600 underline"
            >
              {isRegistering ? 'Login' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
  