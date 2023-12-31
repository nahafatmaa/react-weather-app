import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Naha Fatma and is {""}
          <a
            href="https://github.com/nahafatmaa/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
