import * as React from "react"
import { FiUpload } from "react-icons/fi"


export default function Header() {
    return (
        <div className="flex w-full" style={{ maxHeight: '44px', minHeight: '44px' }}>
            <div className="border-b-2 flex w-full">
                {/* UPLAOD ICON */}
                <div className="w-full left-0 flex">
                    <button className="h-5 w-5 my-auto mx-4">
                        <FiUpload className=" w-full h-full hover:text-gray-300" />
                    </button>
                </div>
                {/* APP NAME  */}
                <div className="w-full text-center my-auto text-xl font-bold">Lowlight</div>
                {/* balance div */}
                <div className="w-full"></div>
            </div>

        </div>
    )
}