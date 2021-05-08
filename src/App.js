import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LiveOrders from './components/LiveOrders/LiveOrders';

import Parent from './components/Parent/Parent';
import Sidebar from './components/Sidebar/Sidebar';
import PauseOrders from './components/PauseOrders/PauseOrders';
import Customers from './components/Customers/Customers';
import Menus from './components/Menus/Menus';
import View from './components/View/View';
import Products from './components/Products/Products';
import Addproduct from './components/Addproduct/Addproduct';
import Outlets from './components/Outlets/Outlets';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Inventory from './components/Inventory/Inventory'
// import $ from 'jquery';
// import jQuery from 'jquery';
class App extends React.Component {

  render(){
    return (
      <BrowserRouter >
       <Sidebar/>
       <Parent>
				<Switch>
          <Route path="/dashboard"  exact component={Dashboard} />
          <Route path="/liveorders"   component={LiveOrders} />
          
          <Route path="/PauseOrders" component={PauseOrders}/>
          <Route path="/Customers" component={Customers}/>
          <Route path="/menu/menus" component={Menus}/>
          <Route path="/View/View" component={View}/>
          <Route path="/Products/Products" component={Products}/>
          <Route path="/Addproduct/Addproduct" component={Addproduct}/>
          <Route path="/outlets" component={Outlets}/>
          <Route path="/OrderHistory" component={OrderHistory}/>
          <Route path="/Inventory" component={Inventory}/>
				</Switch>
        </Parent>
			</BrowserRouter>
    );
  }
 
}

export default App;
