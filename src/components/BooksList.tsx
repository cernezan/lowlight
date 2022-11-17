import * as React from "react"
import BookCard from "./BookCard"


export default function BooksList({booksData}: any) {
    return (
        <div>
            {booksData && booksData.map((book: any) => {
                return (
                        <BookCard bookData={book} />
                )
            })}
        </div>
    )
}