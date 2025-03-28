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

  const handleRedBanToggle = () => {
    setRedBanActive(true);
    setBlueBanActive(false);
  };

  const handleBlueBanToggle = () => {
    setBlueBanActive(true);
    setRedBanActive(false);
  };

  const resetSelection = () => {
    setSelectedColor(null);
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
      <h1>選擇你的顏色</h1>

      {!selectedColor && (
        <div>
          <button onClick={() => handleColorSelection('red')} style={{ backgroundColor: 'red' }}>紅色</button>
          <button onClick={() => handleColorSelection('blue')} style={{ backgroundColor: 'blue' }}>藍色</button>
        </div>
      )}

      {selectedColor && !opponentTeam && (
        <div>
          <p>{`您的顏色是：${selectedColor}`}</p>
          <p>請選擇對方隊伍：</p>
          <button onClick={() => handleOpponentSelection(1)}>第1隊</button>
          <button onClick={() => handleOpponentSelection(2)}>第2隊</button>
          <button onClick={() => handleOpponentSelection(3)}>第3隊</button>
          <button onClick={() => handleOpponentSelection(4)}>第4隊</button>
          <button onClick={() => handleOpponentSelection(5)}>第5隊</button>
          <button onClick={() => handleOpponentSelection(6)}>第6隊</button>
          <button onClick={() => handleOpponentSelection(7)}>第7隊</button>
          <button onClick={() => handleOpponentSelection(8)}>第8隊</button>
          <button onClick={() => handleOpponentSelection(9)}>第9隊</button>
          <button onClick={() => handleOpponentSelection(10)}>第10隊</button>
        </div>
      )}

      {opponentTeam && opponentColor && (
        <div>
          <p>{`您與第${opponentTeam}隊比賽，您的顏色是：${selectedColor}，對方顏色是：${opponentColor}`}</p>
          <p>{`紅方禁用角色：`}</p>
          <div>
            {redBannedCharacters.map((char, index) => (
              <span key={index}>{char}, </span>
            ))}
          </div>

          <p>{`藍方禁用角色：`}</p>
          <div>
            {blueBannedCharacters.map((char, index) => (
              <span key={index}>{char}, </span>
            ))}
          </div>

          <div className="character-selection">
            {characters.map((character, index) => (
              <button
                key={index}
                onClick={() => handleBanCharacter(selectedColor === 'red' ? 'red' : 'blue', character.name)}
                disabled={bannedCharacters.includes(character.name)} // 被禁用的角色無法選擇
                style={{
                  backgroundColor: bannedCharacters.includes(character.name) ? 'gray' : character.color, // 顯示灰色底色
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
