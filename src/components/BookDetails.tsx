import * as React from "react"
import { MdOutlineNoteAdd, MdOutlineArrowBack } from "react-icons/md"


export default function BookDetails({ bookData, changePageFunction }: any) {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    async function insertHighlight(highlight: string) {
        const highlightBlock = craft.blockFactory.textBlock({
            content: highlight,
        })

        const result = await craft.dataApi.addBlocks([highlightBlock])
    }

    return (
        <div>
            <div className="m-2 flex">
                <button className="mr-2" onClick={() => changePageFunction('booksList')}>
                    <MdOutlineArrowBack className="hover:text-gray-400 dark:hover:text-gray-200" />
                </button>
                <div className="flex flex-col">
                    <div className="font-bold tracking-tight text-gray-900 dark:text-white">{bookData.bookTitle}</div>
                    <div className="font-normal text-sm text-gray-600 dark:text-gray-400">{bookData.bookAuthor}</div>
                </div>

            </div>

            {bookData && bookData.highlights.map((highlight: any) => {
                return (

                    <>
                        <div onClick={() => insertHighlight(highlight.bookHighlight)} className="flex flex-col max-w-sm p-4 m-2 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <div className="flex flex-row mb-2">
                                <MdOutlineNoteAdd className="text-xl" />

                                <div className="text-sm ml-auto text-gray-600 dark:text-gray-400">{highlight.highlightDate}</div>
                            </div>

                            <div>{highlight.bookHighlight}</div>

                        </div>

                    </>
                )
            })}
        </div>
    )
}
