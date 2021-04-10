import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LiveOrders from './components/LiveOrders/LiveOrders';
// import Parent from './components/Parent/Parent';
import Sidebar from './components/Sidebar/Sidebar';
// import $ from 'jquery';
// import jQuery from 'jquery';
class App extends React.Component {

  render(){
    return (
      <BrowserRouter >
       <Sidebar/>
				<Switch>
          <Route path="/dashboard"  exact component={Dashboard} />
          <Route path="/liveorders"   component={LiveOrders} />
				</Switch>

			</BrowserRouter>
    );
  }
 
}

export default App;
