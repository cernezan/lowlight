import * as React from "react"

export default function BookDetails({ bookData, changePageFunction }: any) {
    return (
        <div style={{ border: '1px solid red' }}>
            <button onClick={() => changePageFunction('booksList')}>Back</button>
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