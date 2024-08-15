import './App.css';
import { useState } from 'react';

function App() {
  let [data, setData] = useState(1);
  
  const addValue = () => {
    if(data < 20){
      console.log("clicked", data);
    setData(data + 1);
    }
  }

  const removeValue = () => {
    if(data > 0){
      console.log("clicked", data);
      setData(data - 1);
    }
  }

  return (
    <div className="App">
      <h1>Chai aur react</h1>
      <h2>Counter value: {data} </h2>
      <button onClick={addValue}>Add Value {data}</button>
      <br/>
      <button onClick={removeValue}>Remove Value {data}</button>
      <p>footer: {data}</p>
    </div>
  );
}

export default App;
