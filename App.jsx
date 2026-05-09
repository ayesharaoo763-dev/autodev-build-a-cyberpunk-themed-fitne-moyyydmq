import React, { useState } from 'react';
import { gsap } from 'gsap';
import './App.css';
function App() {
  const [steps, setSteps] = useState(0);
  const [hydration, setHydration] = useState(0);
  const [calories, setCalories] = useState(0);
  const handleStepsChange = (e) => {
    setSteps(e.target.value);
  };
  const handleHydrationChange = (e) => {
    setHydration(e.target.value);
  };
  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };
  React.useEffect(() => {
    gsap.to('.xp-bar', { width: `${steps}%` });
    gsap.to('.mana-bar', { width: `${hydration}%` });
    gsap.to('.energy-bar', { width: `${calories}%` });
  }, [steps, hydration, calories]);
  return (
    <div className="bento-grid">
      <div className="card">
        <h2>XP Gained</h2>
        <input type="number" value={steps} onChange={handleStepsChange} />
        <div className="progress-bar">
          <div className="xp-bar"></div>
        </div>
      </div>
      <div className="card">
        <h2>Mana Level</h2>
        <input type="number" value={hydration} onChange={handleHydrationChange} />
        <div className="progress-bar">
          <div className="mana-bar"></div>
        </div>
      </div>
      <div className="card">
        <h2>Energy Core</h2>
        <input type="number" value={calories} onChange={handleCaloriesChange} />
        <div className="progress-bar">
          <div className="energy-bar"></div>
        </div>
      </div>
      <div className="character-stats">
        <h2>Character Stats</h2>
        <div className="stat">
          <h3>XP</h3>
          <p>{steps}</p>
        </div>
        <div className="stat">
          <h3>Mana</h3>
          <p>{hydration}</p>
        </div>
        <div className="stat">
          <h3>Energy</h3>
          <p>{calories}</p>
        </div>
      </div>
    </div>
  );
}
export default App;