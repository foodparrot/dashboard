import React from "react";
import "../Dashboard/dashboard.css";
function Dashboard() {
  window.$(".dropdown-item").click(function () {
    window
      .$(this)
      .parents(".dropdown")
      .find(".dropdown-toggle")
      .html(window.$(this).text());
    window
      .$(this)
      .parents(".dropdown")
      .find(".dropdown-toggle")
      .val(window.$(this).data("value"));
  });
  return (
    <div className="container-fluid ">
      <div className="container-fluid row rowps-1">
        <p>Bismillah</p>
      </div>

      <div className="container-fluid dashboard">
      <p className="paraps">Dashboard</p>
          <div class="form-group col-12 col-md-4">
            <label for="selectOutletToPause" style={{ whiteSpace: "nowrap" }}>
              Select outlet
            </label>
            
            <select class="form-select mb-2" aria-label="Default select example">
              <option value="1">Outlet 1</option>
              <option value="2">Outlet 2</option>
              <option value="3">Outlet 3</option>
            </select>
          </div>
          
        {/* current month*/}
        <div className="col-md-3 mb-2">
          <select class="form-select month" aria-label="Default select example">
            <option selected>Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>

        {/*grids  */}
        <div className="container cardsdashboard">
          <div className="col-12 col-md-3 p-2">
            <div className="card carddashboard">
              <div className="row rowd1 ">Total Orders</div>
              <div className="row rowd1">0</div>
              <div className="row rowd1">Orders</div>
            </div>
          </div>
          <div className="col-12 col-md-3 p-2">
            <div className="card carddashboard">
              <div className="row rowd1 ">Total Sales</div>
              <div className="row rowd1">0.00</div>
              <div className="row rowd1">Sales</div>
            </div>
          </div>
          <div className="col-12 col-md-3 p-2">
            <div className="card carddashboard">
              <div className="row rowd1 ">Average basket value</div>
              <div className="row rowd1">0.00</div>
              <div className="row rowd1">Value</div>
            </div>
          </div>
          <div className="col-12 col-md-3 p-2">
            <div className="card carddashboard ">
              <div className="row rowd1 ">Average order rating</div>
              <div className="row rowd1">0.00</div>
              <div className="row rowd1">Score</div>
            </div>
          </div>
        </div>

        <div className="cust">
          <div
            className="table-responsive clrtable"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <table class="table orders-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">#of orders</th>
                  <th scope="col">#of customers</th>
                  <th scope="col">% of customers</th>
                  <th scope="col">Avg basket</th>
                  <th scope="col">Total sales</th>
                  <th scope="col">%of total orders</th>
                  <th scope="col">ACV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="dashboard-items"
                    data-label=""
                    style={{ textAlign: "left" }}
                  >
                    New
                  </td>
                  <td className="dashboard-items" data-label="#oforders">
                    0
                  </td>
                  <td className="dashboard-items" data-label="#of customers">
                    0
                  </td>
                  <td className="dashboard-items" data-label="% of customers">
                    0%
                  </td>
                  <td className="dashboard-items" data-label="Avg basket">
                    ₹0.00
                  </td>
                  <td className="dashboard-items" data-label="Total sales">
                    ₹0.00
                  </td>
                  <td className="dashboard-items" data-label="%of total orders">
                    0%
                  </td>
                  <td className="dashboard-items" data-label="ACV">
                    ₹0.00
                  </td>
                </tr>
                <tr style={{ background: "#D7D4D6" }}>
                  <td
                    className="dashboard-items"
                    data-label=""
                    style={{ textAlign: "left" }}
                  >
                    Returning
                  </td>
                  <td className="dashboard-items" data-label="#oforders">
                    0
                  </td>
                  <td className="dashboard-items" data-label="#of customers">
                    0
                  </td>
                  <td className="dashboard-items" data-label="% of customers">
                    0%
                  </td>
                  <td className="dashboard-items" data-label="Avg basket">
                    ₹0.00
                  </td>
                  <td className="dashboard-items" data-label="Total sales">
                    ₹0.00
                  </td>
                  <td className="dashboard-items" data-label="%of total orders">
                    0%
                  </td>
                  <td className="dashboard-items" data-label="ACV">
                    ₹0.00
                  </td>
                </tr>
                <tr>
                  <td
                    className="dashboard-items"
                    data-label=""
                    style={{ textAlign: "left" }}
                  >
                    Total
                  </td>
                  <td className="dashboard-items" data-label="#oforders">
                    0
                  </td>
                  <td className="dashboard-items" data-label="#of customers">
                    0
                  </td>
                  <td className="dashboard-items" data-label="% of customers">
                    0%
                  </td>
                  <td className="dashboard-items" data-label="Avg basket">
                    ₹0.00
                  </td>
                  <td className="dashboard-items" data-label="Total sales">
                    ₹0.00
                  </td>
                  <td className="dashboard-items" data-label="%of total orders">
                    0%
                  </td>
                  <td className="dashboard-items" data-label="ACV">
                    ₹0.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="gapdb"></div>
      </div>
    </div>
  );
}

export default Dashboard;
