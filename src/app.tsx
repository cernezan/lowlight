import * as React from "react"
import * as ReactDOM from 'react-dom'
import craftXIconSrc from "./craftx-icon.png"
import { fileProcessor } from "./index"
import Header from "./components/Header"

const App: React.FC<{}> = () => {
  const isDarkMode = useCraftDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    }}>
      
    <Header />

    <img className="icon" src={craftXIconSrc} alt="CraftX logo" />
    <button className={`btn ${isDarkMode ? "dark" : ""}`} onClick={insertHelloWorld}>
      Hello world!
    </button>
    <label>Select a file:</label>
    <input onChange={uploadFile} type="file" id="myfile" name="myfile"/>

  </div>;
}

function useCraftDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    craft.env.setListener(env => setIsDarkMode(env.colorScheme === "dark"));
  }, []);

  return isDarkMode;
}

function insertHelloWorld() {
  const block = craft.blockFactory.textBlock({
    content: "Hello world!"
  });

  craft.dataApi.addBlocks([block]);
}

function uploadFile(event: any) {
  const reader = new FileReader()
  reader.onload = fileProcessor;
  reader.readAsText(event.target.files[0])
}

export function initApp() {
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
