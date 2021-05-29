import React from 'react'
 import '../Dashboard/dashboard.css';
function Dashboard() {
    window.$(".dropdown-item").click(function(){
        window.$(this).parents(".dropdown").find('.dropdown-toggle').html(window.$(this).text());
        window.$(this).parents(".dropdown").find('.dropdown-toggle').val(window.$(this).data('value'));
      });
    return (
       
        <div className="container-fluid ">
            <div className='row headerd'>
                        <p>Bismillah Outlet</p>                        
                    </div>
            
              <div className="container-fluid dashboard">
                <p className="heading">Dashboard</p>
             {/* dropdown */}
    

                {/* current month*/}
                <div className="container nav navbar dropdown_cls">
                    <div className="row" style={{padding:'2% 0'}}>
                        <div className="col-12 month dropdown">
                        <a href="#" class="dropdown-toggle anc-tag-d " data-toggle="dropdown">current month</a>
                            <div class="dropdown-menu">
                            <a href="#" class="dropdown-item" value="January">January</a>
                            <a href="#" class="dropdown-item" value="February">February</a>
                            <a href="#" class="dropdown-item" value="March">March</a>
                            <a href="#" class="dropdown-item" value="April">April</a>
                            <a href="#" class="dropdown-item" value="May">May</a>
                            <a href="#" class="dropdown-item" value="June">June</a>
                            <a href="#" class="dropdown-item" value="July">July</a>
                            <a href="#" class="dropdown-item" value="August">August</a>
                            <a href="#" class="dropdown-item" value="September">September</a>
                            <a href="#" class="dropdown-item" value="October">October</a>
                            <a href="#" class="dropdown-item" value="November">November</a>
                            <a href="#" class="dropdown-item" value="December">December</a>
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
        
              <div className='cust'>
              <div className="table-responsive clrtable" style={{display:"flex",justifyContent:"center"}}>
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
                         <td className="dashboard-items" data-label="" style={{textAlign:'left'}}>New</td>
                         <td className="dashboard-items" data-label="#oforders">0</td>
                         <td className="dashboard-items" data-label="#of customers">0</td>
                         <td className="dashboard-items" data-label="% of customers">0%</td>
                         <td className="dashboard-items" data-label="Avg basket">₹0.00</td>
                         <td className="dashboard-items" data-label="Total sales">₹0.00</td>
                         <td className="dashboard-items" data-label="%of total orders">0%</td>
                         <td className="dashboard-items" data-label="ACV">₹0.00</td>
                         </tr>
                         <tr style={{background:'#D7D4D6'}}>
                         <td className="dashboard-items" data-label="" style={{textAlign:'left'}}>Returning</td>
                         <td className="dashboard-items" data-label="#oforders">0</td>
                         <td className="dashboard-items" data-label="#of customers">0</td>
                         <td className="dashboard-items" data-label="% of customers">0%</td>
                         <td className="dashboard-items" data-label="Avg basket">₹0.00</td>
                         <td className="dashboard-items" data-label="Total sales">₹0.00</td>
                         <td className="dashboard-items" data-label="%of total orders">0%</td>
                         <td className="dashboard-items" data-label="ACV">₹0.00</td>
                         </tr>
                         <tr>
                         <td className="dashboard-items" data-label=""style={{textAlign:'left'}}>Total</td>
                         <td className="dashboard-items" data-label="#oforders">0</td>
                         <td className="dashboard-items" data-label="#of customers">0</td>
                         <td className="dashboard-items" data-label="% of customers">0%</td>
                         <td className="dashboard-items" data-label="Avg basket">₹0.00</td>
                         <td className="dashboard-items" data-label="Total sales">₹0.00</td>
                         <td className="dashboard-items" data-label="%of total orders">0%</td>
                         <td className="dashboard-items" data-label="ACV">₹0.00</td>
                         </tr>
                      </tbody>
                   </table>
               </div>
               </div>
               <div className='gapdb'></div>

       </div>
           
</div>
        
    )
}

export default Dashboard
