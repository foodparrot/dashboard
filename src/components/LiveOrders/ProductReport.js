import React ,{useRef, useState} from 'react'
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import {IoCloseSharp} from "react-icons/io5"
function ProductReport() {
    const checkBoxRef = useRef();
    const [itemCheck, setItemCheck] = useState(false);
    const handleCheckBox = (e) => {
        setItemCheck(o=>!o);
        console.log(checkBoxRef);
    }
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
                            <IoCloseSharp/>
                            </>
                        }
                    />
                </div>
                <div className="col-4">
                    <img className="img-cls" src="https://s3.amazonaws.com/company-photo.theladders.com/2262/4dadaf63-837d-414e-ae95-edd81a72a486.png"></img>
                </div>
                <div className="col-7">
                    <div className="d-flex" style={{ flexWrap: 'wrap', flexDirection: "column", justifyContent: "space-between" }}>
                        <div>item 1</div>

                        <div className="row m-0" style={{ alignItems: "center", justifyContent: "space-between" }}>
                            <span className="col-3 p-0" style={{ minWidth: "max-content" }}><span class="badge badge-light">1</span>&ensp; X25000000</span>
                            <span className="col-3 p-0" style={{ fontWeight: "700" }}>2500000/-</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductReport