import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { HiDotsVertical } from "react-icons/hi";
import Popup from "reactjs-popup";
import "./optionsModal.css";
import Option from "./Option";
const optionType = (<Option />).type;
const OptionsModal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const popUpRef = useRef();
  useImperativeHandle(ref, () => ({
    close() {
      setOpen(false);
      popUpRef.current.close();
    },
  }));

  return (
    <Popup
      className={props.className ? props.className : ""}
      trigger={
        <button className="options-btn">
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
      onClose={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      nested
      ref={popUpRef}
    >
      <ul style={{ listStyle: "none", padding: "5px" }}>
        {props.children.map((child, index) => {
          if (child.type === optionType) {
            return React.cloneElement(child, { ...child.props, key: index });
          } else {
            alert("Requires Popup of Option type element");
            console.error("Requires Popup of Option type element");
            throw new Error("Requires Popup of Option type element");
          }
        })}
      </ul>
    </Popup>
  );
});

export default OptionsModal;
