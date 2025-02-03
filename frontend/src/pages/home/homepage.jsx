import React from 'react'
import { Link } from 'react-router-dom';
import '../../index.css'
import Navbar from '../../components/Navbar';

const HomePage = () => {
    // const text = "Welcome to ScreenSage";
    // const typingSpeed = 100; // Speed in milliseconds
    // let index = 0;

    // function type() {
    //     if (index < text.length) {
    //         document.getElementById("typed-heading").textContent += text.charAt(index);
    //         index++;
    //         setTimeout(type, typingSpeed);
    //     }
    // }

    // Start the typing effect after the page loads
    // window.onload = type;

  return (
    
    <div className="hero h-screen bg-cover bg-center">
      
    <div className="flex items-center justify-center h-full text-center">
        <div className="text-white">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold typing" >Welcome To ScreenSage</h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">Some nice quote</p>
            <Link to={"/login"} className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</Link>
        </div>
    </div>
</div>

    
  )
}

export default HomePage
