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
        <div className="login-container">
            <form className="login" onSubmit={handleSubmit}>
                <h3>Log in</h3>

                <label>Email:</label>
                <input 
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label>Password:</label>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button disabled={isLoading}>Log in</button>
                {error && <div className='error'>{error}</div>}
                <button onClick={handleClick}>Sign up</button>
            </form>

            {/* Additional Content Section */}
            <div className="app-info">
                <button className="info-toggle" onClick={toggleInfo}>
                    {showInfo ? 'Hide' : 'Learn More About the App'}
                </button>
                {showInfo && (
                    <div className="info-content">
                        <h4>Welcome to Our App</h4>
                        <p>
                            This app is designed to help you enhance your vocabulary through engaging
                            and interactive tests. Once you log in, you'll be able to track your progress,
                            select personalized learning packs, and more.
                        </p>
                        <p>
                            Haven't signed up yet? Click the "Sign up" button to create your account and start learning today!
                        </p>
                        <h4>How it works:</h4>
                        <ul>
                            <li>Create an account or log in if you already have one.</li>
                            <li>Take an initial test to assess your vocabulary level.</li>
                            <li>Select a learning pack based on your level.</li>
                            <li>Start learning and track your progress over time!</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        
        
    )
}

export default Login