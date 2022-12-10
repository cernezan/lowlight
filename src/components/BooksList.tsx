import * as React from "react"
import BookCard from "./BookCard"

export default function BooksList(props: any) {

    function openBook(book: any, page: string) {
        props.openBook(book, page)
    }
    return (
        <div>
            {props.booksData && props.booksData.map((book: any) => {
                return (
                    <>
                        <BookCard bookData={book} openBook={props.openBook} />
                    </>
                )
            })}
        </div>
    )
}