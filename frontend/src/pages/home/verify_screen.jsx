import React from 'react'
import { useAuthStore } from "../../store/authUser.js";
import HomePage from "./homepage";
import HomeScreen from "./homescreen";
import Navbar from '../../components/Navbar.jsx';
const verify_screen = () => {
	const { user } = useAuthStore();
  return (
	<div>
<>{user ? <HomeScreen /> : <HomePage/>}</>;
	</div>
  )
}

export default verify_screen

