import { hot } from "react-hot-loader/root";
import { GoMarkGithub } from "react-icons/go";
import { AiFillRocket } from "react-icons/ai";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
          }
          className="App-logo"
          alt="logo"
        />
        <p>
          <h2>Essential Pack </h2>
          Includes
          <ul>
            <li>
              <a
                className="App-link"
                href="https://github.com/gaearon/react-hot-loader"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-hot-loader
              </a>
            </li>
            <li>
              <AiFillRocket />{" "}
              <a
                className="App-link"
                href="https://github.com/react-icons/react-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                react-icons
              </a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://prettier.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                prettier
              </a>
            </li>
          </ul>
          <GoMarkGithub />{" "}
          <a
            className="App-link"
            href="https://github.com/pal404error"
            target="_blank"
            rel="noopener noreferrer"
          >
            pal404error
          </a>
        </p>
      </header>
    </div>
  );
}

export default hot(App);
