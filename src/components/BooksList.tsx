import * as React from "react"
import BookCard from "./BookCard"

export default function BooksList(props: any) {

    function openBook (book: any) {
        console.log(book, "MA")
        props.openBook(book)
    }
    return (
        <div>
            {props.booksData && props.booksData.map((book: any) => {
                return (
                    <>
                        <BookCard bookData={book}/>
                        <button onClick={() => openBook(book)}>TEST</button>
                    </>
                )
            })}
        </div>
    )
}