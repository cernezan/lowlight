import * as React from "react"
import { FiUpload } from "react-icons/fi"
import { fileProcessor } from "../index"



export default function Header() {
    const hiddenFileInput = React.useRef() as any
    function triggerUploadMenu() {
        hiddenFileInput.current.click()
    }

    function uploadFile(event: any) {
        const reader = new FileReader()
        reader.onload = fileProcessor;
        reader.readAsText(event.target.files[0])
    }

    return (
        <div className="flex w-full" style={{ maxHeight: '44px', minHeight: '44px', height: '44px' }}>
            <div className="flex w-full" style={{ minHeight: '44px' }}>
                {/* UPLAOD ICON */}
                <div className="w-full left-0 flex">
                    <input onChange={uploadFile} ref={hiddenFileInput} type="file" hidden></input>
                    <button onClick={triggerUploadMenu} className="h-5 w-5 my-auto mx-4">
                        <FiUpload className=" w-full h-full hover:text-gray-300" />
                    </button>
                </div>
                {/* APP NAME  */}
                <div className="w-full text-center my-auto text-xl font-bold">Lowlight</div>
                {/* balance div */}
                <div className="w-full" style={{ minHeight: '44px' }}></div>
            </div>

        </div>
    )
}