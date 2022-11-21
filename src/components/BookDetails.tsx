import * as React from "react"

export default function BookDetails({bookData}: any) {
    console.log(bookData, "HFM")
    return (
        <div>
            <div>Title: {bookData.bookTitle}</div>
        </div>
    )
}