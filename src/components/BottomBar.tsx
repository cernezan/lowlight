import * as React from "react"
import { MdSettings, MdFilterList } from "react-icons/md"

export default function BottomBar({ dataReady }: any) {

    return (
        <div className="sticky bottom-0 inset-x-0 flex w-full border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200 dark:border-gray-700" style={{ maxHeight: '44px', minHeight: '44px', height: '44px' }}>
            <button className="flex w-12 mr-auto ml-2">
                <MdSettings className="m-auto" />
            </button>

            <button className="flex w-12 mr-2">
                <MdFilterList className="m-auto" />
            </button>
        </div>
    )
}