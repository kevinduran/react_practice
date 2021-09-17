import './App.css';

function App() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
      </style>
      <div className="time">

        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}

export default App;
