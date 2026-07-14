/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Community from './pages/Community';
import Planner from './pages/Planner';
import Weather from './pages/Weather';
import Login from './pages/Login';

import Services from './pages/Services';
import AIAssistant from './pages/AIAssistant';
import GovernmentSchemes from './pages/GovernmentSchemes';
import LearningCenter from './pages/LearningCenter';
import Profile from './pages/Profile';
import MyOrders from './pages/profile/MyOrders';
import MySells from './pages/profile/MySells';
import LearningSaved from './pages/profile/LearningSaved';
import PostSaved from './pages/profile/PostSaved';
import Settings from './pages/profile/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="community" element={<Community />} />
          <Route path="planner" element={<Planner />} />
          <Route path="weather" element={<Weather />} />
          <Route path="services" element={<Services />} />
          <Route path="assistant" element={<AIAssistant />} />
          <Route path="schemes" element={<GovernmentSchemes />} />
          <Route path="learning" element={<LearningCenter />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="sells" element={<MySells />} />
          <Route path="learning-saved" element={<LearningSaved />} />
          <Route path="post-saved" element={<PostSaved />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
