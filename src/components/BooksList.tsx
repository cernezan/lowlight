import * as React from "react"
import BookCard from "./BookCard"

export default function BooksList(props: any) {
    return (
        <div>
            {props.booksData && props.booksData.map((book: any) => {
                return (
                    <>
                        <BookCard bookData={book}/>
                        <button>TEST</button>
                    </>
                )
            })}
        </div>
    )
}