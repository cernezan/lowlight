import * as React from "react"
import { MdOutlineFileUpload } from "react-icons/md"
import { fileProcessor } from "../parser"

export default function Header({ dataReady }: any) {
    const hiddenFileInput = React.useRef() as any
    function triggerUploadMenu() {
        hiddenFileInput.current.click()
    }

    function uploadFile(event: any) {
        const reader = new FileReader()
        reader.onload = fileProcessor
        reader.readAsText(event.target.files[0])
        reader.onloadend = dataReady
    }

    return (
        <div className="sticky top-0 inset-x-0 flex w-full border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-200 dark:border-gray-700" style={{ maxHeight: '44px', minHeight: '44px', height: '44px' }}>
            <div className="flex w-full" style={{ minHeight: '44px' }}>
                {/* UPLAOD ICON */}
                <div className="w-full flex">
                    <input onChange={uploadFile} ref={hiddenFileInput} type="file" hidden></input>
                    <button onClick={triggerUploadMenu} className="h-5 w-5 my-auto mx-4">
                        <MdOutlineFileUpload className=" w-full h-full hover:text-gray-400" />
                    </button>
                </div>
                {/* APP NAME  */}
                <div className="w-full text-center my-auto text-xl text-gray-900 dark:text-white font-bold">Lowlight</div>
                {/* balance div */}
                <div className="w-full" style={{ minHeight: '44px' }}></div>
            </div>

        </div>
    )
}