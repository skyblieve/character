import React, { useState } from 'react';
import './App.css';  // 引入 CSS 檔案

function App() {
  const [team, setTeam] = useState(null);
  const [color, setColor] = useState(null);

  return (
    <div className="App">
      <h1>選擇你的隊伍</h1>
      <button onClick={() => setTeam('第一隊')}>第一隊</button>
      <button onClick={() => setTeam('第二隊')}>第二隊</button>
      <button onClick={() => setTeam('第三隊')}>第三隊</button>
      <button onClick={() => setTeam('第四隊')}>第四隊</button>

      {team && (
        <div>
          <h2>{team}，選擇顏色：</h2>
          <button onClick={() => setColor('red')}>紅色</button>
          <button onClick={() => setColor('blue')}>藍色</button>
        </div>
      )}

      {color && (
        <p>{team} 被選為 
          <span className={`color-label ${color}`}>{color} 隊</span>
        </p>
      )}
    </div>
  );
}

export default App;
