import * as React from "react"

export default function BookDetails({ bookData }: any) {
    return (
        <div style={{ border: '1px solid red' }}>
            <div>Title: {bookData.bookTitle}</div>
            <div>Author: {bookData.bookAuthor}</div>

            {bookData && bookData.highlights.map((highlight: any) => {
                return (
                    <>
                        <div>Highlight: {highlight.bookHighlight}</div>
                        <div>Date: {highlight.highlightDate}</div>
                    </>
                )
            })}
        </div>
    )
}