import React, { Component } from "react";
import "../OrderHistory/OrderHistory.css";
export class OrderHistory extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p style={{ fontWeight: "500", fontSize: "1.3em" }}>Bismillah Outlet</p>
        <div className="ohpallette">
          <div className="col-12 col-md-6 po1">Customers</div>
          {/* Form */}
          <div className="container">
            <div className="box boxstyling">
              <form action="">
                <div className="row formgrping">
                  <div className="col-12 col-sm-3 gapoh">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control gapoh1"
                      placeholder="ID"
                    ></input>
                  </div>
                  <div className="col-12 col-sm-3 gapoh">
                    <input
                      className="col-12"
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[7-9]{1}[0-9]{9}"
                      class="form-control gapoh1"
                      placeholder="Phone No"
                    />
                  </div>
                  <div className="col-12 col-sm-3 gapoh">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option >select outlet</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-3 gapoh">
                    <input
                      type="Date"
                      class="form-control gapoh1"
                      placeholder="Date"
                    ></input>
                  </div>
                  <div className="col-12 col-sm-6 gapoh">
                    {/* <input
                      list="os"
                      class="form-control gapoh1"
                      placeholder="Order Status"
                    ></input>
                    <datalist id="os">
                      <option value="Being packed"></option>
                      <option value="Out to be delivered"></option>
                      <option value="Food is being prepared"></option>
                    </datalist> */}
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option >Order Status</option>
                      <option value="1">Being packed</option>
                      <option value="2">Being packed</option>
                      <option value="3">childSchemaOptions</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-3 gapoh">
                  <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option >Channel</option>
                      <option value="1">Channel-1</option>
                      <option value="2">Channel-2</option>
                      <option value="3">Channel-3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-3 gapoh">
                   <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option >Type</option>
                      <option value="1">Type-1</option>
                      <option value="2">Type-2</option>
                      <option value="3">Type-3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6 gapoh">
                  <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option >Payment</option>
                      <option value="1">Type-1</option>
                      <option value="2">Type-2</option>
                      <option value="3">Type-3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-3 gapoh">
                    <button
                      type="button"
                      class="btn colorchange "
                      style={{ outline: "none", border: "none" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Table*/}
          <div className=" container gapoh2">
            <div className="table-responsive tableoh">
              <table class="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Type</th>
                    <th scope="col">Payment Mode</th>
                    <th scope="col">Total</th>
                    <th scope="col">Channel</th>
                    <th scope="col">Order at</th>
                    <th scope="col">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>Srikar</td>
                    <td>
                      <a href="tel:+916303065650">+916303065650</a>
                    </td>
                    <td>Type-1</td>
                    <td>COD</td>
                    <td>₹200.00</td>
                    <td>Channel-1</td>
                    <td>Outlet</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>Srikar</td>
                    <td>
                      <a href="tel:+916303065650">+916303065650</a>
                    </td>
                    <td>Type-1</td>
                    <td>COD</td>
                    <td>₹200.00</td>
                    <td>Channel-1</td>
                    <td>Outlet</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>Srikar</td>
                    <td>
                      <a href="tel:+916303065650">+916303065650</a>
                    </td>
                    <td>Type-1</td>
                    <td>COD</td>
                    <td>₹200.00</td>
                    <td>Channel-1</td>
                    <td>Outlet</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OrderHistory;
