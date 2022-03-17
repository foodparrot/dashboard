import React from "react";
import { BsFilter, BsSearch } from "react-icons/bs";
import Productoutput from "./Productoutput";
function OrderList({ navBarHeight, winHeight }) {
  return (
    <>
      <div
        className="col-12 col-md-4 vert-div"
        style={{
          height: winHeight - navBarHeight + "px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <button className="btn btn-primary">Filter</button> */}
        {/* <div className="row row-od1 class-bg searchshadow" style={{ position: "sticky", top: "0px", zIndex: "1000", borderRadius: "5px" }}>
                        <input type="search" placeholder="Search by order id..." aria-describedby="button-od" className="s-byid" />
                        <button className="button-od btn-order"><BsSearch /></button>
                    </div> */}
        <div class="searchrow">
          <div class="input-group mb-3 searchshadow">
            <span class="input-group-text">
              <BsFilter style={{ fontSize: "1.4em", marginRight: "1px" }} />
              Filter
            </span>

            <input
              type="text"
              class="form-control"
              placeholder="Order ID..."
              aria-label="Amount (to the nearest dollar)"
              style={{outline:"none",border:"none"}}
            ></input>

            <span class="input-group-text">
              <BsSearch />
            </span>
          </div>
        </div>

        {["113", "123", "143", "103", "107"].map((url) => (
          <Productoutput url={url} />
        ))}
        {/* Desktop , Tablet Button */}

        <button type="button" className="btn-ref p-0 pb-2 ">
          <button className="btn btn-lg innerRef">Refresh</button>
        </button>
      </div>
      <button type="button" className="btn-mobile-ref p-0 pb-2">
        <button className="btn btn-lg innerRef">Refresh</button>
      </button>
    </>
  );
}

export default OrderList;
