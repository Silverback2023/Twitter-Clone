import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="upper-left">
            <h1>Twitter Clone</h1>
          </div>
          
        </header>
      </div>
    </>
  );
}

export default App;
