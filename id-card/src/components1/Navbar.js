import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from './auth';
export default function Navbar() {
  const auth = useAuth();
  const navLinkStyles = ({isActive}) => {
    return{
        textDecoration : isActive ? 'none' : 'underline',
        fontWeight: isActive ? 'bold' : '100'
    }
  }
  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        <NavLink style={navLinkStyles} to="/products">Products</NavLink>
        <NavLink style={navLinkStyles} to="/users">Users</NavLink>
        <NavLink style={navLinkStyles} to="/profileu">Profile</NavLink>
        {
          !auth.user &&(
        <NavLink style={navLinkStyles} to="/login">Login</NavLink>
        )
         }
    </nav>
  )
}