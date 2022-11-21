import * as React from "react"
import BookDetails from "./BookDetails"
import BooksList from "./BooksList"

export default function MainPage(props: any) {

    const [currentPage, setCurrentPage] = React.useState('booksList')
    let page: any
    if(currentPage === 'booksList') {
        page = <BooksList booksData={props.booksData}/> 
    } else {
        page = <BookDetails bookData={props.booksData[0]}/>
    }

    function clickHandler(e: any, test: string) {
        e.preventDefault();
        console.log(test, "TES")
        setCurrentPage('NOT')
    }
    

    return (
        <>
            {page}
            <button onClick={event => clickHandler(event, "BESEDA")}>TES</button>
        </>
    )
}



