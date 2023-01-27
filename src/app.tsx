import * as React from "react"
import * as ReactDOM from 'react-dom'
import Header from "./components/Header"
import BooksList from "./components/BooksList"
import BookDetails from "./components/BookDetails"
import MainPage from "./components/MainPage"
import EmptyPage from "./components/EmptyPage"

const App: React.FC<{}> = () => {
  // handles book data
  const [data, setData] = React.useState()

  React.useEffect(() => {
    getBooksFromDB().then((data) => {
      setData(data)
    })
  }, [])

  function booksDataReady() {
    getBooksFromDB().then((data) => {
      setData(data)
    })
  }

  let page: any = <EmptyPage />
  if (data)
    page = <MainPage booksData={data} />

  return <>
    <div className="flex h-full flex-col">

      <Header dataReady={booksDataReady} />

      {page}

    </div>
  </>
}

// function renderCurrentPage(pageState: string, bookData: any) {
//   if (pageState === 'booksList') {
//     return <BooksList booksData={bookData} />
//   }
//   return <BookDetails bookData={bookData} />
// }

// export function stateManager(newState?: string) {
//   const [pageState, setPageState] = React.useState('booksList')
//   if (newState) setPageState(newState)

//   return pageState
// }

async function getBooksFromDB() {
  let bookList: any = []
  const result = await craft.storageApi.get("booksKeys")

  if (result.status !== "success") {
    console.log("Key is not in the store")
  }

  console.log("Retrieved data:", result.data)
  if (!result.data)
    return

  for (const bookId of JSON.parse(result.data)) {
    const book = await craft.storageApi.get(bookId);
    if (!book.data)
      continue

    bookList.push(JSON.parse(book.data))
  }
  return bookList
}

export function initApp() {
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
