import * as React from "react"


export default function BookCard({bookData}: any) {
    console.log(bookData, "TESTTTT")
   
    return (
        <div style={{border: '1px solid black'}}>
            <div>Title: {bookData.bookTitle}</div>
            <div>Author: {bookData.bookAuthor}</div>
            <button className="btn">Show highlights</button>
        </div>
    )
}