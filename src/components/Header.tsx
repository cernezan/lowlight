import * as React from "react"
import upload_icon from "../assets/icons/upload_icon.svg"


export default function Header() {
    return (
        <div className="header">
            <div style={{ display: 'flex', flex: '1' }}>
                <button className="icon-btn">
                    <img className="icon-btn-image" src={upload_icon} />
                </button>
            </div>
            <div className="header-text">Lowlight</div>
            <div style={{ flex: '1' }}></div>
        </div>
    )
}