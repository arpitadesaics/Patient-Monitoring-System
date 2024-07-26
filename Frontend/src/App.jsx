// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';
import ListPatientComponent from './Components/ListPatientComponent';
import AddPatientComponent from './Components/AddPatientComponent';
import DeletePatientComponent from './Components/DeletePatientComponent';
import ChartComponent from './Components/ChartComponent';
import ReportComponent from './Components/ReportComponent';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="fullscreen-container">
        <HeaderComponent />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/analysis" element={<ChartComponent />} />
            <Route path="/Reports" element={<ReportComponent />} />
            <Route path="/patient" element={<ListPatientComponent />} />
            <Route path="/add-patient" element={<AddPatientComponent />} />
            <Route path="/delete-patient" element={<DeletePatientComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

export default App;
