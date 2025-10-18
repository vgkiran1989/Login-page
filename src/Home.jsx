import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="main-content">
        <h1>Welcome to My Website</h1>
        <p>
          This is your home page where users land after logging in.
          You can customize this section with text, images, or cards.
        </p>
        <button className="explore-btn">Explore More</button>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
