import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LiveOrders from './components/LiveOrders/LiveOrders';
import Parent from './components/Parent/Parent';
import Sidebar from './components/Sidebar/Sidebar';
import Menus from './components/Menus/Menus';
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
          <Route path="/Menus" component={Menus} />
				</Switch>
        </Parent>
			</BrowserRouter>
    );
  }
 
}

export default App;
