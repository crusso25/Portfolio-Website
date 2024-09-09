import React, { useState, useEffect } from 'react';
import './StockPredictor.css';

const StockPredictor = () => {
  const [predictions, setPredictions] = useState(null);
  const [precision, setPrecision] = useState(null);
  const [allResults, setAllResults] = useState([]);
  const [tomorrowPrediction, setTomorrowPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentWeek, setCurrentWeek] = useState(0); 

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/prediction_data.json');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received data:', data);

      setPredictions(data.prediction_counts);
      setPrecision(data.precision_score);
      setAllResults(data.all_results.reverse());
      setTomorrowPrediction(data.tomorrow_prediction);
    } catch (error) {
      console.error('Error fetching predictions:', error);
      setError('Failed to fetch predictions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toDateString();
  };

  const getCurrentWeekResults = () => {
    const startIndex = currentWeek * 7;
    return allResults.slice(startIndex, startIndex + 7);
  };

  const handlePreviousWeek = () => {
    if (currentWeek < Math.floor(allResults.length / 7)) setCurrentWeek(currentWeek + 1);
  };

  const handleNextWeek = () => {
    if (currentWeek > 0) setCurrentWeek(currentWeek - 1);
  };

  return (
    <div className="container">
      <h1>Stock Market Predictions</h1>
      <div className="date">Today's Date: {getTodayDate()}</div>

      {loading && <p className="loading">Loading predictions...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && predictions && (
        <div>
          <h2>Prediction Counts</h2>
          <ul>
            {Object.entries(predictions).map(([key, value]) => (
              <li key={key}>
                {key === '1' ? 'Increase: ' : 'Decrease: '} {value}
              </li>
            ))}
          </ul>
          <h2>Precision Score</h2>
          <p>{(precision * 100).toFixed(2)}%</p>

          <h2>Predictions vs. Actual Outcomes</h2>
          <button onClick={handlePreviousWeek} disabled={currentWeek >= Math.floor(allResults.length / 7)}>Previous Week</button>
          <button onClick={handleNextWeek} disabled={currentWeek === 0}>Next Week</button>
          <ul>
            {getCurrentWeekResults().map((result, index) => (
              <li
                key={index}
                className={
                  result.Predictions === result.Target
                    ? 'correct-prediction'
                    : 'incorrect-prediction'
                }
              >
                <p>{result.Date}</p> Predicted - <span className="prediction">{result.Predictions ? 'Increase' : 'Decrease'}</span>, Actual - <span className="actual">{result.Target ? 'Increase' : 'Decrease'}</span>
              </li>
            ))}
          </ul>

          <h2>Prediction for Tomorrow</h2>
          <p>{tomorrowPrediction}</p>
        </div>
      )}
    </div>
  );
};

export default StockPredictor;
