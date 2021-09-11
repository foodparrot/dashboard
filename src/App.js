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
import Details from "./components/LiveOrders/Details";
import Profile from './components/Profile/Profile';
import Marketing from './components/Marketing/Marketing';
import CreateCoupon from './components/Marketing/createCoupon';
import DiscountCoupons from './components/Marketing/DiscountCoupons';
import Channel from './components/Marketing/SaleChannel';
import Store from './components/Marketing/QRCode';
import MarketingDesign from './components/Marketing/MarketingDesigns';
import StoreBanner from './components/Marketing/StoreBanners';
import WhatsAppStory from './components/Marketing/WhatsAppStories';
import BusinessCards from './components/Marketing/BusinessCards';
import CreateOutlet1 from './components/Outlets/CreateOutlet1';
import CreateOutlet2 from './components/Outlets/CreateOutlet2';
import CreateOutlet3 from './components/Outlets/CreateOutlet3';
import TestModal from './components/TestModal';
import Addcategory from './components/Addcategory/AddCategory';
import Editcategory from './components/Editcategory/EditCategory';
import CreateMenu from './components/Menus/CreateMenu';
import ImportMenu from './components/Menus/ImportMenu';

// import $ from 'jquery';
// import jQuery from 'jquery';
class App extends React.Component {

  render(){
    return (
      <BrowserRouter >
       <Sidebar/>
       <Parent>
				<Switch>
	        <Route path="/"  exact component={Dashboard} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/liveorders"   exact component={LiveOrders} />
          <Route path="/liveorders/:oid"  component={LiveOrders} />
          <Route path="/PauseOrders" component={PauseOrders}/>
          <Route path="/Customers" component={Customers}/>
          <Route path="/menu/menus" component={Menus}/>
          <Route path="/View/View" component={View}/>
          <Route path="/Products/Products" component={Products}/>
          <Route path="/Addproduct/Addproduct" component={Addproduct}/>
          <Route path="/outlets" component={Outlets}/>
          <Route path="/OrderHistory" component={OrderHistory}/>
          <Route path="/Inventory" component={Inventory}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/marketing" component={Marketing}/>
          <Route path="/createcoupon" component={CreateCoupon}/>
          <Route path="/discountcoupons" component={DiscountCoupons}/>
          <Route path="/saleschannels" component={Channel}/>
          <Route path="/storeQRCode" component={Store}/>
          <Route path="/marketingdesigns" component={MarketingDesign}/>
          <Route path="/storebanners" component={StoreBanner}/>
          <Route path="/whatsappstories" component={WhatsAppStory}/>
          <Route path="/businesscards" component={BusinessCards} />
          <Route path="/createoutlets1" component={CreateOutlet1} />
          <Route path="/createoutlets2" component={CreateOutlet2} />
          <Route path="/createoutlets3" component={CreateOutlet3} />
          <Route path="/modal" component={TestModal} />
          <Route path="/Addcategory/Addcategory" component={Addcategory}/>
          <Route path="/Editcategory/Editcategory" component={Editcategory}/>
          <Route path="/menus/Createmenu" component={CreateMenu}/>
          <Route path="/menus/Importmenu" component={ImportMenu}/>

				</Switch>
        </Parent>
			</BrowserRouter>
    );
  }
}

export default App;
