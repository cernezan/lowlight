import * as React from "react"
import BookDetails from "./BookDetails"
import BooksList from "./BooksList"

export default function MainPage(props: any) {

    const [currentPage, setCurrentPage] = React.useState('booksList')
    const [selectedBook, setSelectedBook] = React.useState()
    let page: any
    if (currentPage === 'booksList') {
        page = <BooksList booksData={props.booksData} openBook={openBook} />
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

    return (
        <>
            {page}
        </>
    )
}
