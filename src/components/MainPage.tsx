import * as React from "react"
import BooksList from "./BooksList"

export default function MainPage(props: any) {

    const [currentPage, setCurrentPage] = React.useState('booksList')
    let page: any
    if(currentPage === 'booksList') {
        page = <BooksList booksData={props.booksData}/> 
    } else {
        page = <div>TEST</div>
    }

    function clickHandler(e: any) {
        e.preventDefault();
        setCurrentPage('NOT')
    }
    

    return (
        <>
            {page}
            <button onClick={clickHandler}>TES</button>
        </>
    )
}



