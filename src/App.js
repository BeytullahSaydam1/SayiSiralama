import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sortedAscending, setSortedAscending] = useState([]);
  const [sortedDescending, setSortedDescending] = useState([]);
  //Ekleme işlemi
  const addNumber = () => {
    if (!isNaN(inputValue) && inputValue !== '') {
      const newNumber = parseInt(inputValue);
      setNumbers([...numbers, newNumber]);
      setInputValue('');
    }
  };
  //Sıralama İşlemi
  const sortNumbers = () => {
    const sorted = [...numbers].sort((a, b) => a - b);
    setSortedAscending(sorted);
    setSortedDescending(sorted.slice().reverse());
  };
  //Sayıları temizleme fonskiyonu
  const clearNumbers = () => {
    setNumbers([]);
    setSortedAscending([]);
    setSortedDescending([]);
  };

  return (
    <div className="App">
      <h1>Sayi Siralama</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addNumber} disabled={inputValue === ''}>
        Ekle
      </button>
      <button onClick={sortNumbers} disabled={numbers.length === 0}>
        Siralama
      </button>
      <button onClick={clearNumbers} disabled={numbers.length === 0}>
        Hepsini Temizle
      </button>
      <div>
        <h2>Girilen Sayilar</h2>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Kucukten Buyuge Siralama</h2>
        <ul>
          {sortedAscending.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Buyukten kucuge Siralama</h2>
        <ul>
          {sortedDescending.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
