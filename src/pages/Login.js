import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
//sss

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
            <div>
                <h2>Word a Day</h2>
                <h3>Learn just one word a day. </h3>
            </div>
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

            
        </div>
        
        
    )
}

export default Login