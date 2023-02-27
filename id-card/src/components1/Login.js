import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './auth';

export default function Login() {
  const [user,setUser] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogin = () => {
    auth.login(user);
    navigate('/profileu');
  }
  return (
    <div>
      <label>
        User Name:<input type='text' value={user} onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </label>
    </div>
  )
}