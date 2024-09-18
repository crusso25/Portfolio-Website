import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import './index.css';
import StockPredictor from './StockPredictor';
import reportWebVitals from './reportWebVitals';
import Portfolio from './Portfolio';
import './StockPredictor.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} /> {/* Default route for Portfolio */}
        <Route path="/predictordashboard" element={<StockPredictor />} /> {/* Route for StockPredictor */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
