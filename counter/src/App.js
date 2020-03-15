import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => { document.title = `You clicked ${count} times`});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="heading">React App</h1>
      </header>
      <main className="main">
        <div>
          <p>You clicked {count} times!</p>
          <button onClick={() => setCount(count+1)}>Click me <mark>:)</mark></button>
        </div>
      </main>
    </div>
  );
}

export default App;
