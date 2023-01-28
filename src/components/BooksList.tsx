import * as React from "react"
import BookCard from "./BookCard"
import BottomBar from "./BottomBar"

export default function BooksList(props: any) {

    return (
        <>
            <div>
                {props.booksData && props.booksData.map((book: any) => {
                    return (
                        <>
                            <BookCard bookData={book} openBook={props.openBook} />
                        </>
                    )
                })}
            </div>

            <BottomBar sortByBookTitle={props.sortByBookTitle} />
        </>
    )
}
