import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1> dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by {""}
          <a
            href="https://friendly-mayer-5513d1.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Mihae Tak
          </a>
          , open-sourced on {""}
          <a
            href="https://github.com/mntak/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , hosted on
          <a
            href="https://cocky-darwin-28723b.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
