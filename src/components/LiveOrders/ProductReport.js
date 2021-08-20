import React, { useRef, useState } from "react";
import * as Icon from "react-icons/fi";
import Checkbox from 'react-custom-checkbox';
import { IoCloseSharp } from "react-icons/io5";
function ProductReport() {
  const checkBoxRef = useRef();
  const [itemCheck, setItemCheck] = useState(true);
  const handleCheckBox = (v) => {
    setItemCheck(v);
    const parent = window.$(checkBoxRef.current).parent();
    if (!v) {
      const wrongIcon = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg>`;
      window.$(checkBoxRef.current).before(wrongIcon);
    } else {
      parent.find("svg").remove();
    }
  };
  return (
    <>
      <div className="row badge-row">
        <div className="col-1">
          <Checkbox
            checked={itemCheck}
            icon={
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  backgroundColor: "#174A41",
                  alignSelf: "stretch",
                }}
              >
                <Icon.FiCheck color="white" size={18} />
              </div>
            }
            borderColor="#174A41"
            // borderWidth={0}
            borderRadius={20}
            style={{ overflow: "hidden" }}
            containerClassName="liveItemCheckContainer"
            className="liveItemCheckBox"
            reference={checkBoxRef}
            onChange={handleCheckBox}
            size={20}
            icon={
              <>
                {/* <IoCloseSharp/> */}
                <Icon.FiCheck />
              </>
            }
          />
        </div>
        <div className="col-4">
          <img
            className="img-cls"
            src="https://s3.amazonaws.com/company-photo.theladders.com/2262/4dadaf63-837d-414e-ae95-edd81a72a486.png"
          ></img>
        </div>
        <div className="col-6">
          <div
            className="d-flex"
            style={{
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>item 1</div>

            <div
              className="row m-0"
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <span className="col-3 p-0" style={{ minWidth: "max-content" }}>
                <span class="badge badge-light">1</span>&ensp; X25000000
              </span>
              <span className="col-3 p-0" style={{ fontWeight: "700" }}>
                2500000/-
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReport;
