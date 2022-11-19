import * as React from "react"
import BookCard from "./BookCard"


export default function BooksList({booksData, passClickData}: any) {
    return (
        <div>
            {booksData && booksData.map((book: any) => {
                return (
                    <>
                        <BookCard key={book.bookAuthor} bookData={book} />

                        <button onClick={() => {passClickData('special')}}>TEST</button>
                    </>
                     
                )
            })}
        </div>
    )
}