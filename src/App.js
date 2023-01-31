import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import ChatPage from './chat/ChatPage';
import ChartWeather from './weather/ChartWeather';
import ToDoList from './to-do-list/ToDoList';
import UserPage from './crm/user/UserPage';

export default function App() {
  return (
    <div style={{ height: '100%' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="weather" element={<ChartWeather />} />
        <Route path="to-do-list" element={<ToDoList />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </div>
  );
}
