import * as React from "react"
import BookDetails from "./BookDetails"
import BooksList from "./BooksList"

export default function MainPage(props: any) {
    let page: any
    const [booksData, setBooksData] = React.useState(props.booksData)

    const [currentPage, setCurrentPage] = React.useState('booksList')
    const [selectedBook, setSelectedBook] = React.useState()
    const [sortState, setSortState] = React.useState('none')

    if (currentPage === 'booksList') {
        page = <BooksList booksData={booksData} openBook={openBook} sortByBookTitle={sortByBookTitle} />
    } else if (currentPage === 'bookDetailsPage') {
        page = <BookDetails bookData={selectedBook} changePageFunction={changePage} />
    }

    function clickHandler(e: any, test: string) {
        e.preventDefault();
        setCurrentPage('NOT')
    }

    function openBook(book: any, page: string) {
        setSelectedBook(book)
        setCurrentPage(page)
    }

    function changePage(page: string) {
        setCurrentPage(page)
    }

    // TODO: handle sorting by date added by default 
    // TODO: save user sorting preference to local storage
    function sortByBookTitle() {
        if (booksData && sortState != 'asc' || sortState === 'none') {
            setSortState('asc')
            booksData.sort(function (a: any, b: any) {
                return a.bookTitle.localeCompare(b.bookTitle);
            })
        } else {
            setSortState('desc')
            booksData.sort(function (a: any, b: any) {
                return b.bookTitle.localeCompare(a.bookTitle);
            })
        }
    }

    return (
        <>
            {page}
        </>
    )
}
