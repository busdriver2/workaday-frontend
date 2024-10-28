import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'


const Login = () => {
    const [email, setEmail] = useState('')
    const [showInfo, setShowInfo] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    const handleClick = () => {
        navigate('/signup')
    }

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input 
                                type="email" 
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                    </div>

                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

                    <div className="text-sm mt-4">
                        Don't have an account? 
                        <button 
                            type="button" 
                            onClick={handleClick}
                            className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                {/* Additional Info Section */}
                <div className="mt-6">
                    <button 
                        className="w-full py-2 px-4 text-center text-indigo-600 hover:text-indigo-800 font-medium"
                        onClick={toggleInfo}
                    >
                        {showInfo ? 'Hide' : 'Learn More About the App'}
                    </button>

                    {showInfo && (
                        <div className="mt-4 p-4 border rounded-md bg-gray-100">
                            <h4 className="text-lg font-semibold mb-2">Welcome to Our App</h4>
                            <p className="text-sm text-gray-700">
                                This app is designed to help you enhance your vocabulary through engaging
                                and interactive tests. Once you log in, you'll be able to track your progress,
                                select personalized learning packs, and more.
                            </p>
                            <h4 className="mt-4 text-lg font-semibold">How it works:</h4>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Create an account or log in if you already have one.</li>
                                <li>Take an initial test to assess your vocabulary level.</li>
                                <li>Select a learning pack based on your level.</li>
                                <li>Start learning and track your progress over time!</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login