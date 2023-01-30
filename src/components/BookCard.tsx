import * as React from "react"
import { MdOutlineArrowForward } from "react-icons/md"

export default function BookCard({ bookData, openBook }: any) {
    return (
        <div onClick={() => openBook(bookData, 'bookDetailsPage')} className="flex max-w-sm p-4 m-2 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="break-words w-full">
                <div className="flex">
                    <h2 className="text-base break-words font-bold tracking-tight text-gray-900 dark:text-white">{bookData.bookTitle}</h2>

                    <MdOutlineArrowForward className="ml-auto min-w-max min-w-auto" />
                </div>
                <div className="font-normal text-sm text-gray-700 dark:text-gray-400">
                    {bookData.bookAuthor.map((author: string[]) => (
                        <span className="mr-2">{author}</span>
                    ))}
                </div>

            </div>


        </div>
    )
}