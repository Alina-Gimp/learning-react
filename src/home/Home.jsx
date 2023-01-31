import React from 'react';
import './HomeStyles.css';
import {
  Link,
  Outlet,
} from 'react-router-dom';


function Home() {
  return (
    <div className="projects">
      <h1>My projects</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/chat">ChatPage</Link>
            </li>
            <li>
              <Link to="/weather">ChartWeather</Link>
            </li>
            <li>
              <Link to="/to-do-list">ToDoList</Link>
            </li>
            <li>
              <Link to="/user">UserPage</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
