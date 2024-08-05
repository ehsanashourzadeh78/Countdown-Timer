import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

function App() {
  return (
    <div className='main'>
      <Hello />
      <Timer />
    </div>
  );
}

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return <h2 className='timer'>It is {time}</h2>;
}

function Hello() {
  return <h1>Welcome My Friend</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
