import React, {useState} from 'react'
import BootstrapModal from './Popups/BootstrapModal'
import {Button} from "react-bootstrap"
import OptionsModal from './Popups/OptionsModal';

function TestModal() {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const Body = () => (<p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
    </p>);
    const Title = () => (
        <h1>Title...YO</h1>
    )
    const Footer = () => (
        <div className="row justify-content-between w-100">
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={()=>{alert("saved")}}>Save</Button>
        </div>
    )
    return (
        <>
        <h1>
        Testing modal            
        </h1>
        <OptionsModal/>
        <button className="btn btn-primary" onClick={()=>setOpen(o=>!o)}>Button {open ? "Open":"Closed"}</button>
                <BootstrapModal title={<Title/>} onHide={onClose} show={open} footer={<Footer/>}>
            <Body/>
        </BootstrapModal>
        </>
    )
}

export default TestModal
