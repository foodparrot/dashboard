import React from 'react'
 import '../Dashboard/dashboard.css';

function Dashboard() {
    return (
       
        <div className="container-fluid ">
            <div className='row headerd'>
                        <p>Bismillah Outlet</p>                        
                    </div>
            
            <div className="container-fluid dashboard">
                <p className="heading">Dashboard</p>

                {/* current month*/}
                <div className="container nav navbar dropdown_cls">
                    <div className="row" style={{padding:'2% 0'}}>
                        <div className="col-12 month dropdown">
                        <a href="#" class="dropdown-toggle anc-tag-d " data-toggle="dropdown">current month</a>
                            <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">January</a>
                            <a href="#" class="dropdown-item">February</a>
                            <a href="#" class="dropdown-item">March</a>
                            <a href="#" class="dropdown-item">April</a>
                            <a href="#" class="dropdown-item">May</a>
                            <a href="#" class="dropdown-item">June</a>
                            <a href="#" class="dropdown-item">July</a>
                            <a href="#" class="dropdown-item">August</a>
                            <a href="#" class="dropdown-item">September</a>
                            <a href="#" class="dropdown-item">October</a>
                            <a href="#" class="dropdown-item">November</a>
                            <a href="#" class="dropdown-item">December</a>
                            </div>
                        </div>
                    </div>
                </div>  

                {/*grids  */}
                    <div className= "container grids ">
                        <div className= "row card-deck">
                            <div className='card carddashboard col-12 col-md-3'>
                                    <div className="row rowd1 ">Total Orders</div>
                                    <div className="row rowd1">0</div>
                                    <div className="row rowd1">Orders</div>
                            </div>
                            <div className="card carddashboard col-12 col-md-3  ">
                                <div className="row rowd1 ">Total Sales</div>
                                <div className="row rowd1">0.00</div>
                                <div className="row rowd1">Sales</div>
                            </div>
                            <div className="card carddashboard col-12 col-md-3  ">
                                <div className="row rowd1 ">Average basket value</div>
                                <div className="row rowd1">0.00</div>
                                <div className="row rowd1">Value</div>
                            </div>
                            <div className="card carddashboard col-12 col-md-3  ">
                                <div className="row rowd1 ">Average order rating</div>
                                <div className="row rowd1">0.00</div>
                                <div className="row rowd1">Score</div>
                            </div>
                        </div>
                    </div>
        

              <div className="table-responsive clrtable">
                   <table class="table orders-table">
                      <thead>
                      <tr>
                           <th scope= "col"></th>
                           <th scope= "col">#of orders</th>
                           <th scope= "col">#of customers</th>
                           <th scope= "col">% of customers</th>
                           <th scope= "col">Avg basket</th>
                           <th scope= "col">Total sales</th>
                           <th scope= "col">%of total orders</th>
                           <th scope= "col">ACV</th>
                       </tr>
                      </thead>
                      <tbody>
                      <tr>
                         <td data-label="" style={{textAlign:'left'}}>New</td>
                         <td data-label="#oforders">0</td>
                         <td data-label="#of customers">0</td>
                         <td data-label="% of customers">0%</td>
                         <td data-label="Avg basket">₹0.00</td>
                         <td data-label="Total sales">₹0.00</td>
                         <td data-label="%of total orders">0%</td>
                         <td data-label="ACV">₹0.00</td>
                         </tr>
                         <tr style={{background:'#D7D4D6'}}>
                         <td data-label="" style={{textAlign:'left'}}>Returning</td>
                         <td data-label="#oforders">0</td>
                         <td data-label="#of customers">0</td>
                         <td data-label="% of customers">0%</td>
                         <td data-label="Avg basket">₹0.00</td>
                         <td data-label="Total sales">₹0.00</td>
                         <td data-label="%of total orders">0%</td>
                         <td data-label="ACV">₹0.00</td>
                         </tr>
                         <tr>
                         <td data-label=""style={{textAlign:'left'}}>Total</td>
                         <td data-label="#oforders">0</td>
                         <td data-label="#of customers">0</td>
                         <td data-label="% of customers">0%</td>
                         <td data-label="Avg basket">₹0.00</td>
                         <td data-label="Total sales">₹0.00</td>
                         <td data-label="%of total orders">0%</td>
                         <td data-label="ACV">₹0.00</td>
                         </tr>
                      </tbody>
                   </table>
               </div>

       </div>
           
</div>
        
    )
}

export default Dashboard
