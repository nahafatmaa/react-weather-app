import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This project is coded by Naha Fatma and is {""}
          <a
            href="https://github.com/nahafatmaa/react-weather-app"
            target="_blank"
          >
            open-sourced on github
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
