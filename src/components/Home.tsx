import React from "react";

const Home : React.FC =() => {
    return (
    <header id="home" className=" relative w-full fade-in-element">
        <div className="image-container">
        <img src="/img/2.png" alt="Landing Page" className="w-full h-full object-cover" />
        </div>
        <a href="">
            <h1 id="landing-text" className="textlama text-white text-7xl font hover:text-black px-4 py-2 rounded transition duration-300">Welcome</h1>
        </a>
    </header>
    )
}

export default Home;