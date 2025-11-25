import { useState } from "react"
import Modal from "./Modal";

const ModalPopup = () => {

    const [display, setDisplay] = useState(false);


    return (
        <div className="flex flex-row justify-center mt-3">
            <button className="cursor-pointer p-2 border" onClick={() => setDisplay(!display)}>
                Modal Popup
            </button>
            {
                display && <Modal header={<div>Content for Header</div>}
                body = {<div>Content for Body</div>}
                footer = {<div>Content for Footer</div>}
                fun={setDisplay}   
                />
            }
        </div>
    )
}

export default ModalPopup