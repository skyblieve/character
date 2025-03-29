import React, { useState } from 'react';
import './App.css';

// 角色名稱及其分區顏色
const characters = [
  { name: '魔法少女', region: '詠歌城', color: 'orange' },
  { name: '矜貴之女', region: '詠歌城', color: 'orange' },
  { name: '戰鬥法師', region: '詠歌城', color: 'orange' },
  { name: '元素師', region: '詠歌城', color: 'orange' },
  { name: '靈符師', region: '詠歌城', color: 'orange' },
  { name: '賢者', region: '詠歌城', color: 'orange' },
  { name: '祈禱師', region: '詠歌城', color: 'orange' },
  { name: '英靈人形', region: '詠歌城', color: 'orange' },
  { name: '神秘學者', region: '詠歌城', color: 'orange' },
  { name: '星墜女巫', region: '詠歌城', color: 'orange' },
  { name: '蝶舞者', region: '詠歌城', color: 'orange' },
  { name: '聖女', region: '神聖教廷', color: 'lightblue' },
  { name: '守護天使', region: '神聖教廷', color: 'lightblue' },
  { name: '聖槍騎士', region: '神聖教廷', color: 'lightblue' },
  { name: '女武神', region: '神聖教廷', color: 'lightblue' },
  { name: '神官', region: '神聖教廷', color: 'lightblue' },
  { name: '聖殿騎士', region: '神聖教廷', color: 'lightblue' },
  { name: '聖廷檢察士', region: '神聖教廷', color: 'lightblue' },
  { name: '傳教士', region: '神聖教廷', color: 'lightblue' },
  { name: '紅衣主教', region: '神聖教廷', color: 'lightblue' },
  { name: '聖弓', region: '神聖教廷', color: 'lightblue' },
  { name: '月之女神', region: '神聖教廷', color: 'lightblue' },
  { name: '狂戰士', region: '鮮血議會', color: 'red' },
  { name: '仲裁者', region: '鮮血議會', color: 'red' },
  { name: '紅蓮騎士', region: '鮮血議會', color: 'red' },
  { name: '血色劍靈', region: '鮮血議會', color: 'red' },
  { name: '蒼炎魔女', region: '鮮血議會', color: 'red' },
  { name: '染污者', region: '鮮血議會', color: 'red' },
  { name: '勇者', region: '鮮血議會', color: 'red' },
  { name: '噬神者', region: '鮮血議會', color: 'red' },
  { name: '血之巫女', region: '鮮血議會', color: 'red' },
  { name: '風之劍聖', region: '戰技殿堂', color: 'green' },
  { name: '暗殺者', region: '戰技殿堂', color: 'green' },
  { name: '神箭手', region: '戰技殿堂', color: 'green' },
  { name: '精靈射手', region: '戰技殿堂', color: 'green' },
  { name: '獵巫人', region: '戰技殿堂', color: 'green' },
  { name: '格鬥家', region: '戰技殿堂', color: 'green' },
  { name: '劍帝', region: '戰技殿堂', color: 'green' },
  { name: '獸靈武士', region: '戰技殿堂', color: 'green' },
  { name: '女僕長', region: '戰技殿堂', color: 'green' },
  { name: '封印師', region: '幻影聯盟', color: 'purple' },
  { name: '魔劍士', region: '幻影聯盟', color: 'purple' },
  { name: '冒險家', region: '幻影聯盟', color: 'purple' },
  { name: '瘟疫法師', region: '幻影聯盟', color: 'purple' },
  { name: '魔槍', region: '幻影聯盟', color: 'purple' },
  { name: '魔弓', region: '幻影聯盟', color: 'purple' },
  { name: '陰陽師', region: '幻影聯盟', color: 'purple' },
  { name: '異教徒', region: '幻影聯盟', color: 'purple' },
  { name: '結界師', region: '幻影聯盟', color: 'purple' },
  { name: '吟遊詩人', region: '幻影聯盟', color: 'purple' },
  { name: '靈魂術士', region: '幻影聯盟', color: 'purple' },
  { name: '紀錄者', region: '幻影聯盟', color: 'purple' }
];

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null); // 用來記錄選擇的場次
  const [opponentTeam, setOpponentTeam] = useState(null);
  const [opponentColor, setOpponentColor] = useState(null);

  const [redBannedCharacters, setRedBannedCharacters] = useState([]);
  const [blueBannedCharacters, setBlueBannedCharacters] = useState([]);
  const [bannedCharacters, setBannedCharacters] = useState([]);

  const [isRedBanActive, setRedBanActive] = useState(false);
  const [isBlueBanActive, setBlueBanActive] = useState(false);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setOpponentColor(color === 'red' ? 'blue' : 'red');
  };

  const handleMatchSelection = (matchNumber) => {
    setSelectedMatch(matchNumber);
  };

  const handleOpponentSelection = (team) => {
    setOpponentTeam(team);
  };

  const handleBanCharacter = (team, characterName) => {
    if (team === 'red') {
      setRedBannedCharacters((prev) => [...prev, characterName]);
      setBannedCharacters((prev) => [...prev, characterName]);
    } else {
      setBlueBannedCharacters((prev) => [...prev, characterName]);
      setBannedCharacters((prev) => [...prev, characterName]);
    }
  };

  const resetSelection = () => {
    setSelectedColor(null);
    setSelectedMatch(null); // 清除場次選擇
    setOpponentTeam(null);
    setOpponentColor(null);
    setRedBannedCharacters([]);
    setBlueBannedCharacters([]);
    setBannedCharacters([]);
    setRedBanActive(false);
    setBlueBanActive(false);
  };

  return (
    <div className="App">
      <button className="reset-button" onClick={resetSelection}>重置</button>

      {/* 顏色選擇 */}
      {!selectedColor && (
        <div>
          <h1>您的顏色是</h1>
          <button onClick={() => handleColorSelection('red')} style={{ backgroundColor: 'red' }}>紅色</button>
          <button onClick={() => handleColorSelection('blue')} style={{ backgroundColor: 'blue' }}>藍色</button>
        </div>
      )}

      {/* 場次選擇 */}
      {selectedColor && !selectedMatch && (
        <div>
          <h2>請選擇本次比賽場次</h2>
          {[1, 2, 3, 4, 5].map((match) => (
            <button key={match} onClick={() => handleMatchSelection(match)}>第{match}場</button>
          ))}
        </div>
      )}

      {/* 對方隊伍選擇 */}
      {selectedMatch && !opponentTeam && (
        <div>
          <h2>本場為第{selectedMatch}場，請選擇對方隊伍：</h2>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((team) => (
            <button key={team} onClick={() => handleOpponentSelection(team)}>第{team}隊</button>
          ))}
        </div>
      )}

      {/* 禁用角色選擇 */}
      {opponentTeam && opponentColor && (
        <div>
          <h2>本場為第{selectedMatch}場，您對戰的隊伍為第{opponentTeam}隊</h2>
          <h3>您選擇的顏色是：{selectedColor}，對方顏色是：{opponentColor}</h3>

          <h3 style={{ color: 'red' }}>紅方禁用角色：</h3>
          <div className="red-box">
            {redBannedCharacters.join(', ')}
          </div>

          <h3 style={{ color: 'blue' }}>藍方禁用角色：</h3>
          <div className="blue-box">
            {blueBannedCharacters.join(', ')}
          </div>

          <div className="character-selection">
            {characters.map((character, index) => (
              <button
                key={index}
                onClick={() => handleBanCharacter(selectedColor === 'red' ? 'red' : 'blue', character.name)}
                disabled={bannedCharacters.includes(character.name)}
                style={{
                  backgroundColor: bannedCharacters.includes(character.name) ? 'gray' : character.color,
                  color: 'white',
                  padding: '10px',
                  margin: '5px',
                }}
              >
                {character.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
