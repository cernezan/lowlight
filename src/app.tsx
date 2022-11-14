import * as React from "react"
import * as ReactDOM from 'react-dom'
import craftXIconSrc from "./craftx-icon.png"
import { fileProcessor } from "./index"
import Header from "./components/Header"
import BooksList from "./components/BooksList"

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
{/* 
    <img className="icon" src={craftXIconSrc} alt="CraftX logo" />
    <button className={`btn ${isDarkMode ? "dark" : ""}`} onClick={insertHelloWorld}>
      Hello world!
    </button> */}
    <input onChange={uploadFile} type="file" id="myfile" name="myfile"/>

    <BooksList />

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

async function getBooksFromDB() {
  console.log("THEST")
  const result = await craft.storageApi.get("booksKeys");

  if (result.status !== "success") {
    console.log("Key is not in the store");
  }

  console.log("Retrieved data:", result.data);
  if(!result.data)
    return

  for (const bookId of JSON.parse(result.data)) {
    console.log("bookId", bookId)
    const book = await craft.storageApi.get(bookId);
    console.log(book)
    // convert data to JSON 
    // write data to variable
    
  }

  // send data to BooksList component - loop over it
}

export function initApp() {
  ReactDOM.render(<App />, document.getElementById('react-root'))
  getBooksFromDB()
}
