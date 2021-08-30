import React, {useState, } from "react";
import {HiDotsVertical} from "react-icons/hi"
import Popup from "reactjs-popup"
import "./optionsModal.css"
function OptionsModal(props) {
    const [open, setOpen] = useState(false);

  return (
    <Popup
      className={props.className}
      trigger={
        <button
          className="share-btn"
          style={{ position: "absolute", right: "10px" }}
        >
          <HiDotsVertical style={{ fontSize: "1.5em" }} />
        </button>
      }
      position={[
        "left",
        "right",
        "top",
        "top left",
        "top right",
        "bottom right",
        "bottom center",
        "left center",
      ]}
      open={open}
      closeOnDocumentClick
      onClose={()=>setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      nested
    //   ref={popUpRef}
    >
      <ul style={{ listStyle: "none", padding: "5px" }}>
        <li
          onClick={()=>alert('kk')}
          style={{
            border: "none",
            outline: "none",
            color: "white",
            backgroundColor: "none",
            background: "none",
          }}
        >
          Add something
        </li>
      </ul>
    </Popup>
  );
}

export default OptionsModal;
